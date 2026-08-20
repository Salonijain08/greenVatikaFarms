import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
};

function validatePhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m22 2-7 20-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M22 2 11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-9 w-9"
      aria-hidden="true"
    >
      <path
        d="m5 12.5 4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="10"
        width="14"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M8 10V7a4 4 0 0 1 8 0v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Popup({
  isOpen,
  onClose,
  title = "Enquire Now",
}) {
  const [form, setForm] =
    useState(initialForm);

  const [errors, setErrors] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const resetPopup = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  const handleClose = () => {
    resetPopup();

    if (typeof onClose === "function") {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        resetPopup();

        if (typeof onClose === "function") {
          onClose();
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name } = event.target;

    let { value } = event.target;

    if (name === "phone") {
      value = value
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const validationErrors = {};

    if (!form.name.trim()) {
      validationErrors.name =
        "Full name is required";
    }

    if (
      !form.email.trim() ||
      !/^\S+@\S+\.\S+$/.test(form.email)
    ) {
      validationErrors.email =
        "Enter a valid email address";
    }

    if (!validatePhone(form.phone)) {
      validationErrors.phone =
        "Enter a valid 10-digit number starting with 6, 7, 8, or 9";
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    if (
      Object.keys(validationErrors).length
    ) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const inputClass = (hasError) => `
    min-h-12 w-full rounded-xl
    border bg-[#fcfbf8]
    px-4 py-3 text-sm
    text-[#293b2e]
    outline-none
    transition-all duration-200
    placeholder:text-[#8b948d]
    focus:bg-white
    focus:ring-4
    ${
      hasError
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-[#173d23]/15 focus:border-[#b78b43] focus:ring-[#b78b43]/10"
    }
  `;

  return (
    <div
      className="
        fixed inset-0 z-[3000]
        flex items-center justify-center
        bg-[#07110b]/75
        p-4 backdrop-blur-sm
        sm:p-6
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
      role="presentation"
    >
      <div
        className="
          relative max-h-[92vh]
          w-full max-w-[520px]
          overflow-y-auto
          rounded-[26px]
          border border-white/20
          bg-white
          shadow-[0_30px_100px_rgba(0,0,0,0.4)]
          [scrollbar-width:thin]
        "
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        {/* Top accent */}
        <div
          className="
            h-1.5 w-full
            bg-gradient-to-r
            from-[#173d23]
            via-[#c49b52]
            to-[#173d23]
          "
        />

        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="
            absolute right-4 top-5
            z-20 flex h-10 w-10
            items-center justify-center
            rounded-full
            border border-[#173d23]/10
            bg-[#f4f4ef]
            text-[#35493a]
            transition-all duration-200
            hover:rotate-90
            hover:border-[#b78b43]
            hover:bg-[#b78b43]
            hover:text-white
          "
          aria-label="Close popup"
        >
          <CloseIcon />
        </button>

        {submitted ? (
          /* Success message */
          <div
            className="
              flex min-h-[500px]
              flex-col items-center
              justify-center px-6
              py-12 text-center
              sm:px-10
            "
          >
            <div
              className="
                mb-6 flex h-20 w-20
                items-center justify-center
                rounded-full
                bg-[#eaf3ec]
                text-[#2f6a3d]
              "
            >
              <SuccessIcon />
            </div>

            <p
              className="
                mb-3 text-xs font-bold
                uppercase tracking-[2px]
                text-[#b78b43]
              "
            >
              Enquiry Submitted
            </p>

            <h3
              className="
                mb-3 font-serif
                text-3xl font-bold
                text-[#15351f]
              "
            >
              Thank You!
            </h3>

            <p
              className="
                max-w-sm text-sm
                leading-7 text-[#687169]
              "
            >
              Our team will reach out to you shortly
              with details about Green Vatika Farms.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="
                mt-7 inline-flex min-h-11
                items-center justify-center
                rounded-xl
                border-2 border-[#173d23]
                bg-[#173d23]
                px-7 py-2.5
                text-sm font-bold text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#b78b43]
                hover:bg-[#b78b43]
              "
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Popup header */}
            <div
              className="
                bg-[#f7f4ec]
                px-6 pb-6 pt-8
                sm:px-8
              "
            >
              <div
                className="
                  mb-4 inline-flex
                  items-center gap-2
                  rounded-full
                  border border-[#b78b43]/20
                  bg-white px-3 py-1.5
                  text-[10px] font-bold
                  uppercase tracking-[1.3px]
                  text-[#a37837]
                  shadow-sm
                "
              >
                <span
                  className="
                    h-1.5 w-1.5
                    rounded-full bg-[#b78b43]
                  "
                />

                Green Vatika Farms
              </div>

              <h2
                id="popup-title"
                className="
                  pr-12 font-serif
                  text-3xl font-bold
                  leading-tight
                  text-[#15351f]
                  sm:text-4xl
                "
              >
                {title}
              </h2>

              <p
                className="
                  mt-3 max-w-md
                  text-sm leading-6
                  text-[#687169]
                "
              >
                Fill in your details and our team will
                get back to you promptly.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="
                space-y-5 px-6
                py-7 sm:px-8
              "
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="popup-name"
                  className="
                    mb-2 block text-sm
                    font-semibold text-[#35493a]
                  "
                >
                  Full Name{" "}

                  <span className="text-red-500">
                    *
                  </span>
                </label>

                <input
                  id="popup-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass(
                    Boolean(errors.name),
                  )}
                  aria-invalid={Boolean(
                    errors.name,
                  )}
                />

                {errors.name && (
                  <p
                    className="
                      mt-1.5 text-xs text-red-500
                    "
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="popup-email"
                  className="
                    mb-2 block text-sm
                    font-semibold text-[#35493a]
                  "
                >
                  Email Address{" "}

                  <span className="text-red-500">
                    *
                  </span>
                </label>

                <input
                  id="popup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass(
                    Boolean(errors.email),
                  )}
                  aria-invalid={Boolean(
                    errors.email,
                  )}
                />

                {errors.email && (
                  <p
                    className="
                      mt-1.5 text-xs text-red-500
                    "
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="popup-phone"
                  className="
                    mb-2 block text-sm
                    font-semibold text-[#35493a]
                  "
                >
                  Mobile Number{" "}

                  <span className="text-red-500">
                    *
                  </span>
                </label>

                <div
                  className={`
                    flex min-h-12
                    overflow-hidden rounded-xl
                    border bg-[#fcfbf8]
                    transition-all
                    focus-within:bg-white
                    focus-within:ring-4
                    ${
                      errors.phone
                        ? "border-red-400 focus-within:ring-red-100"
                        : "border-[#173d23]/15 focus-within:border-[#b78b43] focus-within:ring-[#b78b43]/10"
                    }
                  `}
                >
                  <span
                    className="
                      flex items-center
                      border-r
                      border-[#173d23]/10
                      bg-[#edf4ee]
                      px-4 text-sm
                      font-bold text-[#244b2e]
                    "
                  >
                    +91
                  </span>

                  <input
                    id="popup-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength={10}
                    className="
                      min-w-0 flex-1
                      bg-transparent
                      px-4 py-3 text-sm
                      text-[#293b2e]
                      outline-none
                      placeholder:text-[#8b948d]
                    "
                    aria-invalid={Boolean(
                      errors.phone,
                    )}
                  />
                </div>

                {errors.phone && (
                  <p
                    className="
                      mt-1.5 text-xs text-red-500
                    "
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  inline-flex min-h-12
                  w-full items-center
                  justify-center gap-3
                  rounded-xl
                  border-2 border-[#173d23]
                  bg-[#173d23]
                  px-7 py-3.5
                  text-sm font-bold
                  tracking-wide text-white
                  shadow-[0_10px_25px_rgba(23,61,35,0.18)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-[#b78b43]
                  hover:bg-[#b78b43]
                  hover:shadow-[0_14px_30px_rgba(183,139,67,0.25)]
                "
              >
                Submit Enquiry
                <SendIcon />
              </button>

              {/* Privacy */}
              <p
                className="
                  flex items-center
                  justify-center gap-1.5
                  text-center text-[11px]
                  text-[#8a918b]
                "
              >
                <LockIcon />
                Your information is safe with us. No
                spam ever.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
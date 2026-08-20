const plotFeatures = [
  "Clear Title",
  "Gated Community",
  "All Amenities Included",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
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

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlotIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path
        d="M4 5.5 9 3l6 2.5L20 3v15.5L15 21l-6-2.5L4 21V5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9 3v15.5M15 5.5V21"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function Configuration({
  onEnquire,
}) {
  return (
    <section
      id="configuration"
      className="
        relative overflow-hidden
        bg-[#102c1a] py-20
        sm:py-24 lg:py-28
      "
    >
      {/* Background pattern */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Decorative glow */}
      <div
        className="
          pointer-events-none
          absolute -right-48 -top-48
          h-[500px] w-[500px]
          rounded-full bg-[#c49b52]/15
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -bottom-56 -left-48
          h-[500px] w-[500px]
          rounded-full bg-[#397547]/15
          blur-3xl
        "
      />

      <div
        className="
          relative z-10 mx-auto
          w-full max-w-[1360px]
          px-5 sm:px-8 lg:px-12
        "
      >
        {/* Heading */}
        <div
          className="
            mx-auto mb-12 max-w-4xl
            text-center lg:mb-14
          "
        >
          <div
            className="
              mb-4 inline-flex
              items-center gap-3
            "
          >
            <span className="h-px w-10 bg-[#c49b52]" />

            <p
              className="
                text-xs font-bold uppercase
                tracking-[3px] text-[#d2ad67]
              "
            >
              Plot Configuration
            </p>

            <span className="h-px w-10 bg-[#c49b52]" />
          </div>

          <h2
            className="
              mb-5 font-serif
              text-[clamp(36px,5vw,60px)]
              font-bold leading-[1.08]
              tracking-[-1px] text-white
            "
          >
            Choose the Plot That Fits{" "}

            <span className="text-[#d2ad67]">
              Your Plan
            </span>
          </h2>

          <p
            className="
              mx-auto max-w-2xl
              text-sm leading-7
              text-white/65 sm:text-base
            "
          >
            Farmhouse plots starting at{" "}

            <strong className="font-semibold text-[#dfba70]">
              ₹8,999/sq. yards
            </strong>
          </p>
        </div>

        {/* Confirmed plot card */}
        <div
          className="
            relative mx-auto max-w-[1000px]
            overflow-hidden rounded-[28px]
            border border-[#d2ad67]/40
            bg-white/[0.07]
            shadow-[0_30px_80px_rgba(0,0,0,0.22)]
            backdrop-blur-sm
          "
        >
          {/* Most popular/available badge */}
          <div
            className="
              absolute right-5 top-5
              z-10 rounded-full
              border border-[#d2ad67]/30
              bg-[#c49b52]
              px-3 py-1.5
              text-[10px] font-bold
              uppercase tracking-[1.4px]
              text-white shadow-lg
              sm:right-7 sm:top-7
            "
          >
            Available Configuration
          </div>

          <div
            className="
              grid grid-cols-1
              lg:grid-cols-[0.85fr_1.15fr]
            "
          >
            {/* Plot size side */}
            <div
              className="
                relative flex min-h-[290px]
                flex-col justify-center
                overflow-hidden
                bg-gradient-to-br
                from-[#c49b52]
                to-[#987137]
                p-7 text-white
                sm:p-10 lg:min-h-[410px]
              "
            >
              {/* Decorative circles */}
              <div
                className="
                  pointer-events-none
                  absolute -right-16 -top-16
                  h-52 w-52 rounded-full
                  border-[35px] border-white/10
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute -bottom-16 -left-12
                  h-44 w-44 rounded-full
                  bg-white/[0.07]
                "
              />

              <span
                className="
                  relative mb-5 flex
                  h-14 w-14 items-center
                  justify-center rounded-2xl
                  border border-white/20
                  bg-white/10
                "
              >
                <PlotIcon />
              </span>

              <p
                className="
                  relative mb-2 text-xs
                  font-bold uppercase
                  tracking-[2.5px]
                  text-white/70
                "
              >
                Plot Size
              </p>

              <div
                className="
                  relative font-serif
                  text-[clamp(58px,7vw,90px)]
                  font-bold leading-none
                  tracking-[-3px]
                "
              >
                1008
              </div>

              <p
                className="
                  relative mt-2 text-lg
                  font-semibold tracking-wide
                  text-white/85
                "
              >
                Sq. Yards
              </p>
            </div>

            {/* Plot information */}
            <div
              className="
                flex flex-col
                justify-center p-6
                sm:p-9 lg:p-12
              "
            >
              <p
                className="
                  mb-2 text-xs font-bold
                  uppercase tracking-[2px]
                  text-[#d2ad67]
                "
              >
                Starting Price
              </p>

              <div
                className="
                  mb-7 flex flex-wrap
                  items-baseline gap-2
                "
              >
                <span
                  className="
                    font-serif text-4xl
                    font-bold text-white
                    sm:text-5xl
                  "
                >
                  ₹8,999
                </span>

                <span
                  className="
                    text-sm font-medium
                    text-white/55
                  "
                >
                  /sq. yards
                </span>
              </div>

              <div
                className="
                  mb-8 h-px w-full
                  bg-white/10
                "
              />

              {/* Features */}
              <div
                className="
                  mb-8 grid grid-cols-1
                  gap-3 sm:grid-cols-3
                  lg:grid-cols-1
                "
              >
                {plotFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex items-center gap-3
                      rounded-xl border
                      border-white/[0.08]
                      bg-black/10
                      px-3.5 py-3
                      text-sm font-medium
                      text-white/80
                    "
                  >
                    <span
                      className="
                        flex h-7 w-7
                        shrink-0 items-center
                        justify-center rounded-full
                        bg-[#d2ad67]/15
                        text-[#d2ad67]
                      "
                    >
                      <CheckIcon />
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={onEnquire}
                className="
                  inline-flex min-h-12
                  w-full items-center
                  justify-center gap-3
                  rounded-xl
                  border-2 border-[#c49b52]
                  bg-[#c49b52]
                  px-7 py-3.5
                  text-sm font-bold
                  tracking-wide text-white
                  shadow-[0_10px_25px_rgba(196,155,82,0.25)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-[#a87f3d]
                  hover:bg-[#a87f3d]
                  hover:shadow-[0_14px_30px_rgba(196,155,82,0.35)]
                "
              >
                Enquire Now
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Availability note */}
        <p
          className="
            mx-auto mt-6 max-w-3xl
            text-center text-xs
            leading-5 text-white/45
          "
        >
          Additional plot sizes and configurations
          are subject to availability and final price
          confirmation.
        </p>
      </div>
    </section>
  );
}
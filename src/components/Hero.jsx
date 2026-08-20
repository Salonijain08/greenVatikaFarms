const heroImage =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80";

const trustBadges = [
  {
    title: "Gated & Secure Community",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M12 3 5 6v5c0 4.8 2.9 8.1 7 10 4.1-1.9 7-5.2 7-10V6l-7-3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        <path
          d="m9 12 2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  // {
  //   title: "Prime Sector 168 Location",
  //   icon: (
  //     <svg
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       className="h-4 w-4"
  //       aria-hidden="true"
  //     >
  //       <path
  //         d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinejoin="round"
  //       />

  //       <circle
  //         cx="12"
  //         cy="9"
  //         r="2.3"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //       />
  //     </svg>
  //   ),
  // },
  {
    title: "Ready Infrastructure",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M4 21V9l8-5 8 5v12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M8 21v-7h8v7M3 21h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}

export default function Hero({
  onEnquire,
  onSiteVisit,
}) {
  return (
    <section
      id="home"
      className="
        relative isolate flex min-h-[700px]
        w-full items-end overflow-hidden
        bg-[#102016] lg:h-screen
      "
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Green Vatika Farms landscape"
          className="
            h-full w-full object-cover
            object-center max-sm:object-[60%_center]
          "
        />

        {/* Bottom dark overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#061109fa]
            via-[#0b1c1199]
            to-[#10201638]
          "
        />

        {/* Left dark overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#061109e6]
            via-[#0a1b1066]
            to-transparent
          "
        />
      </div>

      {/* Floating desktop CTA buttons */}
      <div
        className="
          fixed right-0 top-1/2 z-40
          hidden -translate-y-1/2
          flex-col overflow-hidden
          rounded-l-xl shadow-2xl lg:flex
        "
      >
        
      </div>

      {/* Decorative glow */}
      <div
        className="
          pointer-events-none absolute
          -bottom-40 -left-32
          h-[450px] w-[450px]
          rounded-full bg-[#c49b52]/10
          blur-3xl
        "
      />

      {/* Hero content */}
      <div
        className="
          relative z-10 mx-auto w-full
          max-w-[1400px]
          px-5 pb-12 pt-32
          sm:px-8 sm:pb-16
          lg:px-12 lg:pb-20
        "
      >
        <div className="max-w-[980px]">
          {/* Badge */}
          <div
            className="
              mb-5 inline-flex
              max-w-full items-center gap-2
              rounded-full
              border border-[#dbba77]/40
              bg-[#c49b52]/95
              px-4 py-2
              text-[10px] font-bold
              uppercase leading-none
              tracking-[1.3px] text-white
              shadow-lg backdrop-blur
              sm:text-xs sm:tracking-[1.8px]
            "
          >
            <span
              className="
                h-1.5 w-1.5 shrink-0
                rounded-full bg-white
              "
            />

            <span>
              Luxury Farmhouse Plots — Sector 168,
              Noida
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              mb-4 font-serif
              text-[clamp(52px,7.5vw,108px)]
              font-black leading-[0.88]
              tracking-[-2.5px] text-white
              drop-shadow-[0_5px_22px_rgba(0,0,0,0.5)]
            "
          >
            Green
            <br />

            <span className="text-[#d5ad63]">
              Vatika
            </span>

            <br className="sm:hidden" />

            <span className="sm:ml-5">
              Farms
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="
              mb-5 max-w-2xl
              font-serif text-lg
              italic leading-relaxed
              text-white/85
              sm:text-xl lg:text-2xl
            "
          >
            Your Weekend Escape, Rooted in Nature
          </p>

          {/* Price line */}
          <div
            className="
              mb-5 w-fit max-w-full
              rounded-xl border
              border-[#d5ad63]/40
              bg-[#08170e]/70
              px-4 py-3
              text-sm leading-relaxed
              text-white/85
              shadow-xl backdrop-blur-md
              sm:text-base
            "
          >
            <span>Plots Starting </span>

            <strong className="text-[#e5c27d]">
              ₹8,999/sq. yards
            </strong>

            <span className="mx-2 text-white/35">
              |
            </span>

            <span>Minimum Size </span>

            <strong className="text-white">
              1008 sq. yards
            </strong>
          </div>

          {/* Trust badges */}
          <div
            className="
              mb-5 flex flex-wrap
              gap-2 sm:gap-3
            "
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="
                  flex items-center gap-2
                  rounded-full border
                  border-[#d5ad63]/40
                  bg-[#08170e]/75
                  px-3 py-2
                  text-[11px] font-semibold
                  text-white/90
                  shadow-md backdrop-blur-md
                  transition-all duration-200
                  hover:border-[#d5ad63]/80
                  hover:bg-[#173d23]/90
                  sm:text-xs
                "
              >
                <span className="shrink-0 text-[#d5ad63]">
                  {badge.icon}
                </span>

                <span>{badge.title}</span>
              </div>
            ))}
          </div>

          {/* Location */}
          <div
            className="
              mb-7 flex max-w-2xl
              items-start gap-2
              text-xs leading-relaxed
              text-white/75
              sm:items-center sm:text-sm
            "
          >
            <span
              className="
                mt-0.5 shrink-0
                text-[#d5ad63] sm:mt-0
              "
            >
              <LocationIcon />
            </span>

            <span>
              Sector 168, Noida — Minutes from
              Noida–Greater Noida Expressway
            </span>
          </div>

          {/* CTA buttons */}
          <div
            className="
              grid grid-cols-1 gap-3
              sm:flex sm:flex-wrap
            "
          >
            <button
              type="button"
              onClick={onSiteVisit}
              className="
                min-h-12 rounded-xl
                border-2 border-[#c49b52]
                bg-[#c49b52]
                px-7 py-3.5
                text-sm font-bold
                tracking-wide text-white
                shadow-[0_8px_24px_rgba(196,155,82,0.3)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#a87f3d]
                hover:bg-[#a87f3d]
                hover:shadow-[0_12px_30px_rgba(196,155,82,0.4)]
              "
            >
              Schedule a Site Visit
            </button>

            <button
              type="button"
              onClick={onEnquire}
              className="
                min-h-12 rounded-xl
                border-2 border-white/70
                bg-white/5
                px-7 py-3.5
                text-sm font-bold
                tracking-wide text-white
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#d5ad63]
                hover:bg-[#d5ad63]/10
                hover:text-[#e5c27d]
              "
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <a
        href="#about"
        aria-label="Scroll to About section"
        className="
          absolute bottom-7
          left-1/2 z-20
          hidden h-10 w-6
          -translate-x-1/2
          justify-center rounded-full
          border-2 border-white/50
          transition-colors
          hover:border-[#d5ad63]
          md:flex
        "
      >
        <span
          className="
            mt-2 h-2 w-1
            animate-bounce rounded-full
            bg-[#d5ad63]
          "
        />
      </a> */}
    </section>
  );
}
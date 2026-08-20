const highlights = [
  {
    title: "Minimum Plot Size",
    value: "1008 sq. yards",
  },
  {
    title: "Asking Price",
    value: "₹8,999/sq. yard",
  },
  {
    title: "Gated Community",
    value: "Planned Infrastructure",
  },
  {
    title: "Prime Connectivity",
    value: "Expressways, Metro & Business Hubs",
  },
  {
    title: "Premium Development",
    value: "Landscaped Greens & Wide Roads",
  },
  {
    title: "Ideal Investment",
    value: "Weekend Living & Long-Term Growth",
  },
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

export default function About({ onEnquire }) {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-[#f7f4ec] py-20
        sm:py-24 lg:py-28
      "
    >
      {/* Decorative background */}
      <div
        className="
          pointer-events-none absolute
          -right-40 -top-40
          h-[420px] w-[420px]
          rounded-full bg-[#c49b52]/10
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
        <div
          className="
            grid grid-cols-1
            items-center gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
          "
        >
          {/* Left image */}
          <div className="relative">
            <div
              className="
                absolute -left-4 -top-4
                hidden h-full w-full
                rounded-[28px]
                border border-[#c49b52]/35
                sm:block
              "
            />

            <div
              className="
                group relative overflow-hidden
                rounded-[24px]
                shadow-[0_24px_70px_rgba(22,55,32,0.18)]
              "
            >
              <img
                src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1000&q=85"
                alt="Green Vatika Farms natural environment"
                className="
                  h-[420px] w-full object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                  sm:h-[520px] lg:h-[640px]
                "
              />

              {/* Image gradient */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#0d2817]/75
                  via-transparent
                  to-transparent
                "
              />

              {/* Image bottom text */}
              <div
                className="
                  absolute bottom-0 left-0
                  right-0 p-6 text-white
                  sm:p-8
                "
              >
                <p
                  className="
                    mb-1 text-xs font-semibold
                    uppercase tracking-[2px]
                    text-[#e1bd75]
                  "
                >
                  A private escape in Noida
                </p>

                <p
                  className="
                    max-w-sm font-serif
                    text-xl font-semibold
                    leading-snug sm:text-2xl
                  "
                >
                  Open skies, green surroundings and
                  room to breathe.
                </p>
              </div>
            </div>

            {/* Floating image badge */}
            <div
              className="
                absolute -bottom-6 right-3
                rounded-2xl
                border border-white/20
                bg-[#173d23]
                px-5 py-4 text-center
                text-white
                shadow-[0_14px_35px_rgba(23,61,35,0.35)]
                sm:-right-6 sm:px-7 sm:py-5
              "
            >
              <span
                className="
                  block font-serif
                  text-2xl font-bold
                  leading-none text-[#e1bd75]
                  sm:text-3xl
                "
              >
                1008
              </span>

              <span
                className="
                  mt-1 block text-[10px]
                  font-semibold uppercase
                  tracking-[1.5px]
                  text-white/75
                "
              >
                Sq. Yards Minimum
              </span>
            </div>
          </div>

          {/* Right content */}
          <div>
            {/* Eyebrow */}
            <div
              className="
                mb-4 flex items-center gap-3
              "
            >
              <span
                className="
                  h-[2px] w-10 bg-[#c49b52]
                "
              />

              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[3px] text-[#b38942]
                "
              >
                Welcome To
              </p>
            </div>

            {/* Heading */}
            <h2
              className="
                mb-6 max-w-[760px]
                font-serif
                text-[clamp(34px,4vw,58px)]
                font-bold leading-[1.08]
                tracking-[-1.5px]
                text-[#15351f]
              "
            >
              Green Vatika Farms
              <span className="text-[#b68c45]">
                {" "}
                — Where Every Weekend Feels Like a
                Getaway
              </span>
            </h2>

            {/* Body copy */}
            <div
              className="
                max-w-[760px] space-y-4
                text-[15px] leading-7
                text-[#5f685f]
                sm:text-base sm:leading-8
              "
            >
              <p>
                Life in the city rarely leaves room to
                slow down. Between packed schedules and
                concrete skylines, the idea of open sky
                and quiet green land can feel out of
                reach. Green Vatika Farms was created
                to change that.
              </p>

              <p>
                Tucked away in Sector 168, Noida, this
                farmhouse community gives you a private
                patch of land to build the retreat
                you&apos;ve always pictured — a place
                for family weekends, quiet mornings,
                and gatherings that actually have room
                to breathe.
              </p>

              <p>
                Every plot here is planned around open
                space, greenery and a slower pace of
                living, without moving away from
                Noida&apos;s fast-growing connectivity
                corridor.
              </p>
            </div>

            {/* Highlights */}
            <div
              className="
                my-8 grid grid-cols-1
                gap-3 sm:grid-cols-2
              "
            >
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="
                    group flex items-start
                    gap-3 rounded-xl
                    border border-[#173d23]/10
                    bg-white/75 p-3.5
                    shadow-[0_6px_20px_rgba(22,55,32,0.05)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[#c49b52]/40
                    hover:shadow-[0_10px_25px_rgba(22,55,32,0.09)]
                  "
                >
                  <span
                    className="
                      mt-0.5 flex h-8 w-8
                      shrink-0 items-center
                      justify-center rounded-full
                      bg-[#173d23]
                      text-[#e1bd75]
                      transition-colors
                      group-hover:bg-[#c49b52]
                      group-hover:text-white
                    "
                  >
                    <CheckIcon />
                  </span>

                  <div>
                    <p
                      className="
                        text-xs font-medium
                        text-[#768078]
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-0.5 text-sm
                        font-semibold leading-snug
                        text-[#193822]
                      "
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={onEnquire}
              className="
                inline-flex min-h-12
                items-center justify-center
                gap-3 rounded-xl
                border-2 border-[#173d23]
                bg-[#173d23]
                px-7 py-3
                text-sm font-bold
                tracking-wide text-white
                shadow-[0_10px_25px_rgba(23,61,35,0.2)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#c49b52]
                hover:bg-[#c49b52]
                hover:shadow-[0_14px_30px_rgba(196,155,82,0.3)]
              "
            >
              Know More

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="
                  h-4 w-4
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
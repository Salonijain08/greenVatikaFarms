const distances = [
  {
    landmark: "Lemon Tree Hotel",
    distance: "1–2 km",
  },
  {
    landmark: "ABC Business Park",
    distance: "1–2 km",
  },
  {
    landmark: "IT & Business Hub, Sector 135",
    distance: "1–2 km",
  },
  {
    landmark: "Noida Sector 142 Metro Station",
    distance: "3–4 km",
  },
  {
    landmark: "Kailash Hospital",
    distance: "4–5 km",
  },
  {
    landmark: "Yatharth Hospital",
    distance: "5–6 km",
  },
  {
    landmark: "Noida–Greater Noida Expressway",
    distance: "5–6 km",
  },
  {
    landmark: "Mahamaya Flyover",
    distance: "5 km",
  },
  {
    landmark: "Yamuna Expressway",
    distance: "12 km",
  },
  {
    landmark: "Pari Chowk",
    distance: "14–15 km",
  },
  {
    landmark: "Noida Sector 18 (Commercial Hub)",
    distance: "14–15 km",
  },
  {
    landmark: "Noida Sector 62 (IT Hub)",
    distance: "15–17 km",
  },
  {
    landmark: "Akshardham, Delhi",
    distance: "25–30 km",
  },
  {
    landmark: "Connaught Place, Delhi",
    distance: "30–35 km",
  },
  {
    landmark: "IGI Airport, Delhi",
    distance: "40–45 km",
  },
  {
    landmark: "Jewar (Noida International) Airport",
    distance: "55–60 km",
  },
];

const locationTags = [
  "Strategically Located",
  "High-Growth Corridor",
  "Investment-Ready",
  "Peaceful Everyday Living",
];

const fullAddress =
  "Assotech Business Park, Royal Cricket Ground, Khaproli Banger, near Lemon Tree Hotel, Sector 168, Noida, Uttar Pradesh 201305, India";

const mapQuery = `Green Vatika Farms, ${fullAddress}`;

const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  mapQuery
)}&output=embed`;

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  mapQuery
)}`;

function LocationIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}

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

function DirectionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m21 12-9-9-9 9 9 9 9-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M9 15v-3a2 2 0 0 1 2-2h5M14 8l2 2-2 2"
        stroke="currentColor"
        strokeWidth="1.8"
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
      className="h-3 w-3"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M15 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Location() {
  return (
    <section
      id="location"
      className="
        relative overflow-hidden
        bg-[#f7f4ec] py-20
        sm:py-24 lg:py-28
      "
    >
      {/* Decorative backgrounds */}
      <div
        className="
          pointer-events-none
          absolute -left-48 top-20
          h-[450px] w-[450px]
          rounded-full bg-[#173d23]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-48 bottom-0
          h-[450px] w-[450px]
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
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center lg:mb-12">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#b78b43]" />

            <p
              className="
                text-xs font-bold uppercase
                tracking-[3px] text-[#b78b43]
              "
            >
              Location Advantage
            </p>

            <span className="h-px w-10 bg-[#b78b43]" />
          </div>

          <h2
            className="
              mb-5 font-serif
              text-[clamp(36px,5vw,60px)]
              font-bold leading-[1.08]
              tracking-[-1px] text-[#15351f]
            "
          >
            A Sector 168 Address, Connected to{" "}
            <span className="text-[#b78b43]">
              All of NCR
            </span>
          </h2>

          <p
            className="
              mx-auto max-w-2xl
              text-sm leading-7
              text-[#687169] sm:text-base
            "
          >
            Positioned close to the destinations that matter most.
          </p>
        </div>

        {/* Description */}
        <div
          className="
            mx-auto mb-10 max-w-5xl
            rounded-2xl
            border border-[#173d23]/10
            bg-white/70 px-5 py-5
            text-center
            shadow-[0_8px_30px_rgba(23,61,35,0.05)]
            backdrop-blur sm:px-8
          "
        >
          <p
            className="
              text-sm leading-7 text-[#626d64]
              sm:text-base sm:leading-8
            "
          >
            Green Vatika Farms sits within easy reach of Noida&apos;s key
            business, healthcare, and transit points—from the Noida–Greater
            Noida Expressway to the upcoming metro connectivity in the
            region—while still offering the calm of a farmhouse setting.
          </p>
        </div>

        {/* Map and distances */}
        <div
          className="
            grid grid-cols-1 items-stretch
            gap-8 lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-10
          "
        >
          {/* Map column */}
          <div
            className="
              flex h-full flex-col
              lg:sticky lg:top-24
              lg:self-start
            "
          >
            <div
              className="
                overflow-hidden rounded-[24px]
                border-4 border-white
                bg-white
                shadow-[0_24px_65px_rgba(23,61,35,0.16)]
              "
            >
              <iframe
                title="Green Vatika Farms, Khaproli Banger, Sector 168, Noida"
                src={mapEmbedUrl}
                className="
                  block h-[350px] w-full
                  border-0 sm:h-[390px]
                  lg:h-[420px]
                "
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Address */}
              <div
                className="
                  flex items-start gap-3
                  bg-[#15351f]
                  px-5 py-5 text-white
                  sm:px-6
                "
              >
                <span
                  className="
                    mt-0.5 flex h-10 w-10
                    shrink-0 items-center
                    justify-center rounded-full
                    bg-[#c49b52]/20
                    text-[#dfba70]
                  "
                >
                  <LocationIcon />
                </span>

                <div>
                  <strong
                    className="
                      block font-serif
                      text-lg font-semibold
                    "
                  >
                    Green Vatika Farms
                  </strong>

                  <p
                    className="
                      mt-1 text-xs leading-5
                      text-white/70 sm:text-sm
                    "
                  >
                    Assotech Business Park, Royal Cricket Ground,
                    <br />
                    Khaproli Banger, near Lemon Tree Hotel,
                    <br />
                    Sector 168, Noida, Uttar Pradesh 201305, India
                  </p>
                </div>
              </div>
            </div>

            {/* Location tags */}
            <div
              className="
                mt-5 grid grid-cols-1
                gap-2.5 sm:grid-cols-2
              "
            >
              {locationTags.map((tag) => (
                <div
                  key={tag}
                  className="
                    flex items-center gap-2.5
                    rounded-xl
                    border border-[#173d23]/10
                    bg-white/75 px-3 py-3
                    text-xs font-semibold
                    text-[#244b2e]
                    shadow-[0_5px_18px_rgba(23,61,35,0.04)]
                  "
                >
                  <span
                    className="
                      flex h-7 w-7
                      shrink-0 items-center
                      justify-center rounded-full
                      bg-[#173d23]
                      text-[#dfba70]
                    "
                  >
                    <CheckIcon />
                  </span>

                  <span>{tag}</span>
                </div>
              ))}
            </div>

            {/* Get directions button */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-5 inline-flex min-h-12
                w-full items-center
                justify-center gap-3
                rounded-xl
                border-2 border-[#173d23]
                bg-[#173d23]
                px-7 py-3.5
                text-sm font-bold
                tracking-wide text-white
                shadow-[0_10px_25px_rgba(23,61,35,0.2)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#b78b43]
                hover:bg-[#b78b43]
                hover:shadow-[0_14px_30px_rgba(183,139,67,0.3)]
              "
            >
              <DirectionIcon />
              Get Directions
            </a>
          </div>

          {/* Distances column */}
          <div
            className="
              flex h-full flex-col
              overflow-hidden rounded-[24px]
              border border-[#173d23]/10
              bg-white
              shadow-[0_20px_55px_rgba(23,61,35,0.1)]
            "
          >
            {/* Distance header */}
            <div
              className="
                flex items-center justify-between
                gap-4 bg-[#15351f]
                px-5 py-5 sm:px-6
              "
            >
              <div>
                <p
                  className="
                    text-xs font-bold uppercase
                    tracking-[2px] text-[#dfba70]
                  "
                >
                  Nearby Connectivity
                </p>

                <h3
                  className="
                    mt-1 font-serif
                    text-2xl font-bold text-white
                  "
                >
                  Key Distances
                </h3>
              </div>

              <div
                className="
                  hidden rounded-full
                  border border-white/15
                  bg-white/10 px-3 py-1.5
                  text-xs font-semibold
                  text-white/70 sm:block
                "
              >
                {distances.length} Landmarks
              </div>
            </div>

            {/* Distance cards */}
            <div
              className="
                grid flex-1 grid-cols-1
                gap-2.5 p-4
                sm:grid-cols-2 sm:p-5
              "
            >
              {distances.map(({ landmark, distance }, index) => (
                <div
                  key={landmark}
                  className="
                    group flex min-h-[68px]
                    items-center gap-3
                    rounded-xl
                    border border-[#173d23]/10
                    bg-[#f8f7f2]
                    px-3 py-2.5
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:border-[#b78b43]/40
                    hover:bg-[#f3efe4]
                    hover:shadow-[0_7px_18px_rgba(23,61,35,0.08)]
                  "
                >
                  <span
                    className="
                      flex h-8 w-8 shrink-0
                      items-center justify-center
                      rounded-lg bg-[#173d23]
                      text-[10px] font-bold
                      text-[#dfba70]
                      transition-colors
                      group-hover:bg-[#b78b43]
                      group-hover:text-white
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        text-[13px] font-semibold
                        leading-[1.3] text-[#354039]
                      "
                    >
                      {landmark}
                    </p>

                    <div
                      className="
                        mt-1 flex items-center
                        gap-1 text-[11px]
                        font-bold text-[#397047]
                      "
                    >
                      <ArrowIcon />
                      {distance}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div
              className="
                border-t border-[#173d23]/10
                bg-[#edf4ee]
                px-5 py-3 text-center
              "
            >
              <p className="text-xs leading-5 text-[#607066]">
                Distances are approximate and may vary depending on the
                selected route.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
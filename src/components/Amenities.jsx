import {
  ArrowRight,
  Building2,
  Cctv,
  Droplets,
  Fence,
  Flower2,
  House,
  Landmark,
  Lightbulb,
  LockKeyhole,
  PartyPopper,
  Recycle,
  Route,
  ShieldCheck,
  TreePine,
  Trees,
  Trophy,
  UsersRound,
  Zap,
} from "lucide-react";

const infrastructure = [
  {
    icon: Fence,
    text: "Individual Plot Fencing",
  },
  {
    icon: Route,
    text: "Wide 25-ft Internal Roads",
  },
  // {
  //   icon: Zap,
  //   text: "Underground Electricity",
  // },
  {
    icon: Lightbulb,
    text: "Smart Solar Street Lighting",
  },
  {
    icon: Droplets,
    text: "Rainwater Drainage System",
  },
  {
    icon: Recycle,
    text: "Organised Waste Management",
  },
  {
    icon: Cctv,
    text: "24×7 Manned Security & CCTV",
  },
  {
    icon: Trees,
    text: "Landscaped Green Pockets",
  },
];

const communityAmenities = [
  {
    icon: Building2,
    text: "Premium Clubhouse",
  },
  {
    icon: Trees,
    text: "Landscaped Central Boulevard",
  },
  {
    icon: Flower2,
    text: "Dedicated Club Garden",
  },
  {
    icon: Landmark,
    text: "Grand Entry & Arrival Plaza",
  },
  {
    icon: Trophy,
    text: "Stadium-Facing Premium Plots",
  },
  {
    icon: TreePine,
    text: "Pocket Parks Within the Community",
  },
  {
    icon: PartyPopper,
    text: "Space for Family Events & Gatherings",
  },
  {
    icon: LockKeyhole,
    text: "Private, Gated Living Environment",
  },
];

function AmenityCard({
  title,
  subtitle,
  items,
  icon: HeaderIcon,
}) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-[24px]
        border border-[#b78b43]/15
        bg-[#fffdf8]
        p-5
        shadow-[0_16px_45px_rgba(130,94,38,0.08)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#b78b43]/40
        hover:shadow-[0_24px_60px_rgba(130,94,38,0.13)]
        sm:p-7 lg:p-8
      "
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none
          absolute -right-16 -top-16
          h-40 w-40 rounded-full
          bg-[#e6c98f]/20 blur-3xl
        "
      />

      {/* Card heading */}
      <div
        className="
          relative mb-7 flex
          items-center gap-4
          border-b border-[#b78b43]/15
          pb-6
        "
      >
        <span
          className="
            flex h-14 w-14 shrink-0
            items-center justify-center
            rounded-2xl
            border border-[#b78b43]/20
            bg-[#f5e7c9]
            text-[#9b7134]
            transition-all duration-300
            group-hover:bg-[#b78b43]
            group-hover:text-white
          "
        >
          <HeaderIcon
            size={28}
            strokeWidth={1.8}
          />
        </span>

        <div>
          <h3
            className="
              font-serif text-2xl
              font-bold text-[#3f3524]
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-1 text-xs leading-relaxed
              text-[#817568]
            "
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Amenities list */}
      <ul
        className="
          relative grid grid-cols-1
          gap-3 sm:grid-cols-2
          lg:grid-cols-1 xl:grid-cols-2
        "
      >
        {items.map((item) => {
          const ItemIcon = item.icon;

          return (
            <li
              key={item.text}
              className="
                group/item flex items-start
                gap-3 rounded-xl border
                border-[#b78b43]/10
                bg-[#fdf8ee]
                px-3.5 py-3
                text-sm leading-5
                text-[#5d574d]
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-[#b78b43]/35
                hover:bg-[#f7ead1]
                hover:text-[#433923]
                hover:shadow-[0_7px_18px_rgba(130,94,38,0.08)]
              "
            >
              <span
                className="
                  mt-0.5 flex h-8 w-8
                  shrink-0 items-center
                  justify-center rounded-lg
                  border border-[#b78b43]/15
                  bg-[#f0dfbd]
                  text-[#9b7134]
                  shadow-sm
                  transition-all duration-200
                  group-hover/item:scale-105
                  group-hover/item:bg-[#b78b43]
                  group-hover/item:text-white
                "
              >
                <ItemIcon
                  size={17}
                  strokeWidth={1.9}
                />
              </span>

              <span className="pt-1">
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Amenities({
  onEnquire,
  onSiteVisit,
}) {
  const handleSiteVisit =
    onSiteVisit || onEnquire;

  return (
    <section
      id="amenities"
      className="
        relative overflow-hidden
        bg-[#fbf5e8] py-20
        sm:py-24 lg:py-28
      "
    >
      {/* Champagne grid pattern */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#b78b43_1px,transparent_1px),linear-gradient(90deg,#b78b43_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Background glows */}
      <div
        className="
          pointer-events-none
          absolute -left-48 top-24
          h-[450px] w-[450px]
          rounded-full bg-[#e8ce99]/30
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-48 bottom-0
          h-[450px] w-[450px]
          rounded-full bg-[#c99d50]/10
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
            text-center lg:mb-16
          "
        >
          <div
            className="
              mb-4 inline-flex
              items-center gap-3
            "
          >
            <span className="h-px w-10 bg-[#b78b43]" />

            <p
              className="
                text-xs font-bold uppercase
                tracking-[3px] text-[#b78b43]
              "
            >
              Lifestyle & Amenities
            </p>

            <span className="h-px w-10 bg-[#b78b43]" />
          </div>

          <h2
            className="
              mb-5 font-serif
              text-[clamp(36px,5vw,60px)]
              font-bold leading-[1.08]
              tracking-[-1px] text-[#3f3524]
            "
          >
            Everything a Farmhouse Lifestyle{" "}

            <span className="text-[#b78b43]">
              Should Have
            </span>
          </h2>

          <p
            className="
              mx-auto max-w-3xl
              text-sm leading-7
              text-[#756d62] sm:text-base
            "
          >
            Thoughtfully planned infrastructure that
            lets you focus on the living, not the
            logistics.
          </p>
        </div>

        {/* Amenity cards */}
        <div
          className="
            grid grid-cols-1 gap-6
            lg:grid-cols-2 lg:gap-8
          "
        >
          <AmenityCard
            title="Infrastructure"
            subtitle="Essential services planned for effortless living"
            items={infrastructure}
            icon={House}
          />

          <AmenityCard
            title="Community & Recreation"
            subtitle="Spaces designed for leisure, family and community"
            items={communityAmenities}
            icon={UsersRound}
          />
        </div>

        {/* Dark CTA */}
        <div
          className="
            relative mt-10 overflow-hidden
            rounded-[24px]
            border border-[#d5ad63]/30
            bg-gradient-to-r
            from-[#102c1a]
            via-[#173d23]
            to-[#214d2d]
            p-6
            shadow-[0_20px_50px_rgba(23,61,35,0.25)]
            sm:p-8 lg:mt-12
          "
        >
          {/* Decorative circles */}
          <div
            className="
              pointer-events-none
              absolute -right-16 -top-24
              h-64 w-64 rounded-full
              border-[35px]
              border-[#d5ad63]/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute -bottom-20 right-40
              h-44 w-44 rounded-full
              bg-[#d5ad63]/[0.06]
            "
          />

          <div
            className="
              pointer-events-none
              absolute -left-20 bottom-0
              h-52 w-52 rounded-full
              bg-[#c49b52]/10 blur-3xl
            "
          />

          <div
            className="
              relative z-10 flex
              flex-col items-start gap-6
              md:flex-row md:items-center
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  mb-2 text-xs font-bold
                  uppercase tracking-[2.5px]
                  text-[#dfba70]
                "
              >
                Visit Green Vatika Farms
              </p>

              <h3
                className="
                  max-w-3xl font-serif
                  text-2xl font-bold
                  leading-snug text-white
                  sm:text-3xl
                "
              >
                Experience farmhouse living the way
                it should be — spacious, secure and
                green.
              </h3>
            </div>

            <button
              type="button"
              onClick={handleSiteVisit}
              className="
                inline-flex min-h-12
                shrink-0 items-center
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
                hover:border-white
                hover:bg-white
                hover:text-[#173d23]
                hover:shadow-xl
                max-sm:w-full
              "
            >
              Book a Site Visit

              <ArrowRight
                size={17}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
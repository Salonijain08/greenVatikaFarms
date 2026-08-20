import { useEffect, useState } from "react";

const images = [
  {
    src: "/Farm/photo (0).webp",
    caption: "Aerial view of Green Vatika Farms",
  },
  {
    src: "/Farm/Photo (1).webp",
    caption: "Grand entry plaza",
  },
  {
    src: "/Farm/Photo (2).webp",
    caption: "Landscaped internal roads",
  },
  {
    src: "/Farm/Photo (3).webp",
    caption: "Open green spaces surrounded by nature",
  },
  {
    src: "/Farm/Photo (4).webp",
    caption: "A peaceful farmhouse community",
  },
  {
    src: "/Farm/Photo (6).webp",
    caption: "Wide and well-developed internal roads",
  },
  {
    src: "/Farm/Photo (7).webp",
    caption: "Green surroundings for peaceful weekends",
  },
  {
    src: "/Farm/Photo (8).webp",
    caption: "Nature-inspired living at Green Vatika Farms",
  },
  {
    src: "/Farm/Photo (9).webp",
    caption: "Expansive open landscapes",
  },
  {
    src: "/Farm/Photo (11).webp",
    caption: "Countryside living close to Noida",
  },
  {
    src: "/Farm/Photo (12).webp",
    caption: "A secure retreat surrounded by greenery",
  },
  {
    src: "/Farm/Photo (13).webp",
    caption: "Beautiful farmhouse and cottage views",
  },
  {
    src: "/Farm/Photo (14).webp",
    caption: "Tree-lined internal roads",
  },
  {
    src: "/Farm/Photo (15).webp",
    caption: "A refreshing family weekend destination",
  },
  {
    src: "/Farm/Photo (16).webp",
    caption: "Open skies and lush green surroundings",
  },
  {
    src: "/Farm/Photo (17).webp",
    caption: "Thoughtfully planned farmhouse plots",
  },
  {
    src: "/Farm/Photo (18).webp",
    caption: "Developing spaces at Green Vatika Farms",
  },
  {
    src: "/Farm/Photo (19).webp",
    caption: "A peaceful escape from city life",
  },
  {
    src: "/Farm/Photo (20).webp",
    caption: "Your private retreat in the lap of nature",
  },
];

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m15 18-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m9 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
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

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  const previousImage = () => {
    setActive((current) =>
      current === 0
        ? images.length - 1
        : current - 1,
    );
  };

  const nextImage = () => {
    setActive((current) =>
      current === images.length - 1
        ? 0
        : current + 1,
    );
  };

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    if (!lightboxOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
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
  }, [lightboxOpen]);

  return (
    <>
      <section
        id="gallery"
        className="
          relative overflow-hidden
          bg-[#102c1a] py-20
          sm:py-24 lg:py-28
        "
      >
        {/* Decorative background */}
        <div
          className="
            pointer-events-none
            absolute -left-48 top-20
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
          {/* Section heading */}
         <div className="mx-auto mb-12 max-w-3xl text-center">
  <div className="mb-4 inline-flex items-center gap-3">
    <span className="h-px w-10 bg-[#c49b52]" />

    <p className="text-xs font-bold uppercase tracking-[3px] text-[#d2ad67]">
      Explore Green Vatika
    </p>

    <span className="h-px w-10 bg-[#c49b52]" />
  </div>

  <h2 className="mb-4 font-serif text-[clamp(36px,5vw,60px)] font-bold leading-tight text-white">
    Gallery
  </h2>

  <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
    A glimpse into the green, open world of{" "}
    <span className="font-semibold text-[#d2ad67]">
      Green Vatika Farms
    </span>
  </p>
</div>
          {/* Main carousel */}
          <div
            className="
              relative mx-auto
              max-w-[1150px]
            "
          >
            <div
              className="
                group relative overflow-hidden
                rounded-2xl border
                border-white/10 bg-black/20
                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                sm:rounded-[28px]
              "
            >
              <button
                type="button"
                onClick={openLightbox}
                className="
                  block h-[340px] w-full
                  cursor-zoom-in
                  sm:h-[500px] lg:h-[620px]
                "
                aria-label="Open image in full screen"
              >
                <img
                  key={images[active].src}
                  src={images[active].src}
                  alt={images[active].caption}
                  className="
                    h-full w-full object-cover
                    object-center
                    transition-transform
                    duration-700
                    group-hover:scale-[1.02]
                  "
                />
              </button>

              {/* Image overlays */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/85
                  via-black/5
                  to-black/10
                "
              />

              {/* Counter */}
              <div
                className="
                  absolute left-4 top-4
                  rounded-full border
                  border-white/20
                  bg-black/40
                  px-3 py-1.5
                  text-xs font-semibold
                  text-white backdrop-blur-md
                  sm:left-6 sm:top-6
                "
              >
                {String(active + 1).padStart(2, "0")}
                <span className="mx-1.5 text-white/40">
                  /
                </span>
                {String(images.length).padStart(2, "0")}
              </div>

              {/* Expand button */}
              <button
                type="button"
                onClick={openLightbox}
                className="
                  absolute right-4 top-4
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full border
                  border-white/25
                  bg-black/40 text-white
                  backdrop-blur-md
                  transition-all duration-200
                  hover:border-[#d2ad67]
                  hover:bg-[#d2ad67]
                  sm:right-6 sm:top-6
                "
                aria-label="View full-screen image"
              >
                <ExpandIcon />
              </button>

              {/* Caption */}
              <div
                className="
                  pointer-events-none
                  absolute bottom-0 left-0
                  right-0 p-5 sm:p-8
                "
              >
                <p
                  className="
                    max-w-3xl font-serif
                    text-lg font-semibold
                    leading-snug text-white
                    sm:text-2xl
                  "
                >
                  {images[active].caption}
                </p>

                <p
                  className="
                    mt-2 text-xs
                    text-white/55 sm:text-sm
                  "
                >
                  Green Vatika Farms · Sector 168,
                  Noida
                </p>
              </div>

              {/* Previous button */}
              <button
                type="button"
                onClick={previousImage}
                className="
                  absolute left-3 top-1/2
                  flex h-11 w-11
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full border
                  border-white/25
                  bg-black/40 text-white
                  shadow-xl backdrop-blur-md
                  transition-all duration-200
                  hover:border-[#d2ad67]
                  hover:bg-[#d2ad67]
                  sm:left-6 sm:h-12 sm:w-12
                "
                aria-label="Previous gallery image"
              >
                <ArrowLeftIcon />
              </button>

              {/* Next button */}
              <button
                type="button"
                onClick={nextImage}
                className="
                  absolute right-3 top-1/2
                  flex h-11 w-11
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full border
                  border-white/25
                  bg-black/40 text-white
                  shadow-xl backdrop-blur-md
                  transition-all duration-200
                  hover:border-[#d2ad67]
                  hover:bg-[#d2ad67]
                  sm:right-6 sm:h-12 sm:w-12
                "
                aria-label="Next gallery image"
              >
                <ArrowRightIcon />
              </button>
            </div>

            {/* Thumbnails */}
            <div
              className="
                mt-5 flex gap-3
                overflow-x-auto pb-3
                [scrollbar-color:#c49b52_transparent]
                [scrollbar-width:thin]
              "
            >
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`
                    relative h-16 w-24
                    shrink-0 overflow-hidden
                    rounded-lg border-2
                    transition-all duration-200
                    sm:h-20 sm:w-28
                    ${
                      active === index
                        ? "border-[#d2ad67] opacity-100 shadow-[0_6px_18px_rgba(196,155,82,0.3)]"
                        : "border-transparent opacity-45 hover:opacity-90"
                    }
                  `}
                  aria-label={`Show image ${index + 1}`}
                >
                  <img
                    src={image.src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />

                  {active === index && (
                    <span
                      className="
                        absolute inset-0
                        bg-[#c49b52]/10
                      "
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile dots */}
            <div
              className="
                mt-4 flex flex-wrap
                justify-center gap-1.5 sm:hidden
              "
            >
              {images.map((image, index) => (
                <button
                  key={`dot-${image.src}`}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`
                    h-1.5 rounded-full
                    transition-all duration-200
                    ${
                      active === index
                        ? "w-6 bg-[#d2ad67]"
                        : "w-1.5 bg-white/30"
                    }
                  `}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="
            fixed inset-0 z-[2000]
            flex items-center
            justify-center bg-black/95
            p-4 backdrop-blur-md
            sm:p-8
          "
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            className="
              absolute right-5 top-5
              z-20 flex h-11 w-11
              items-center justify-center
              rounded-full border
              border-white/20
              bg-white/10 text-white
              transition-colors
              hover:bg-[#c49b52]
            "
            aria-label="Close image preview"
          >
            <CloseIcon />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="
              absolute left-3 top-1/2
              z-20 flex h-11 w-11
              -translate-y-1/2
              items-center justify-center
              rounded-full border
              border-white/20
              bg-white/10 text-white
              transition-colors
              hover:bg-[#c49b52]
              sm:left-8 sm:h-13 sm:w-13
            "
            aria-label="Previous image"
          >
            <ArrowLeftIcon />
          </button>

          {/* Image */}
          <div
            className="
              flex max-h-full max-w-[1250px]
              flex-col items-center
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={images[active].src}
              alt={images[active].caption}
              className="
                max-h-[80vh] max-w-full
                rounded-xl object-contain
                shadow-2xl
              "
            />

            <p
              className="
                mt-4 max-w-3xl
                text-center text-sm
                text-white/75 sm:text-base
              "
            >
              {images[active].caption}
            </p>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="
              absolute right-3 top-1/2
              z-20 flex h-11 w-11
              -translate-y-1/2
              items-center justify-center
              rounded-full border
              border-white/20
              bg-white/10 text-white
              transition-colors
              hover:bg-[#c49b52]
              sm:right-8 sm:h-13 sm:w-13
            "
            aria-label="Next image"
          >
            <ArrowRightIcon />
          </button>
        </div>
      )}
    </>
  );
}
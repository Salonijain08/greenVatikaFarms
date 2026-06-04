import { useState } from 'react';
import './Gallery.css';

const BASE = 'https://www.greenbeauty.in/images/gallery/';

const images = [
  { src: `/Farm/photo (0).webp`,  caption: 'Green Vatika Farms — Charming farmhouse retreat' },
  { src: `/Farm/Photo (1).webp`,  caption: 'Green Vatika Farms — Charming farmhouse retreat' },
  { src: `/Farm/Photo (2).webp`,  caption: 'Lush green surroundings in the lap of nature' },
  { src: `/Farm/Photo (3).webp`,  caption: 'Inside the world\'s greenest, smartest farm space' },
  { src: `/Farm/Photo (4).webp`,  caption: 'Scenic landscape — perfect for picnics & parties' },
  { src: `/Farm/Photo (6).webp`,  caption: 'Developed roads & lush tree-lined sidewalks' },
  { src: `/Farm/Photo (7).webp`,  caption: 'A serene getaway for families & friends' },
  { src: `/Farm/Photo (8).webp`,  caption: 'Nature at your doorstep — Green Vatika Farms' },
  { src: `/Farm/Photo (9).webp`,  caption: 'Vast open green spaces across 900 acres' },
  { src: `/Farm/Photo (11).webp`, caption: 'Countryside living from Delhi' },
  { src: `/Farm/Photo (12).webp`, caption: 'A life in nature\'s lap — fully guarded retreat' },
  { src: `/Farm/Photo (13).webp`,  caption: 'Beautiful cottage & farmhouse views' },
  { src: `/Farm/Photo (14).webp`,  caption: 'Developed roads & lush tree-lined sidewalks' },
  { src: `/Farm/Photo (15).webp`,  caption: 'A serene getaway for families & friends' },
  { src: `/Farm/Photo (16).webp`,  caption: 'Nature at your doorstep — Green Vatika Farms' },
  { src: `/Farm/Photo (17).webp`,  caption: 'Vast open green spaces across 900 acres' },
  { src: `/Farm/Photo (18).webp`, caption: 'Green Vatika Farms — developing new locations' },
  { src: `/Farm/Photo (19).webp`, caption: 'Countryside living from Delhi' },
  { src: `/Farm/Photo (20).webp`, caption: 'A life in nature\'s lap — fully guarded retreat' },
];

const allImages = [
  ...images,
  ...[13,14,15,16,17,18].map(n => ({
    src: `${BASE}img${n}.jpg`,
    caption: `Green Vatika Farms — View ${n}`,
  })),
];

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setActive((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setActive((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          A peek into the beauty of Green Vatika Farms — 900 acres of nature's finest
        </p>

        {/* Main Carousel */}
        <div className="carousel">
          <button className="carousel-btn prev" onClick={prev} aria-label="Previous">
            &#8249;
          </button>
          <div className="carousel-main" onClick={() => setLightbox(active)}>
            <img
              src={images[active].src}
              alt={images[active].caption}
              key={active}
            />
            <div className="carousel-caption">{images[active].caption}</div>
          </div>
          <button className="carousel-btn next" onClick={next} aria-label="Next">
            &#8250;
          </button>
        </div>

        {/* Thumbnails */}
        <div className="carousel-thumbs">
          {images.map((img, i) => (
            <div
              key={i}
              className={`thumb ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <img src={img.src} alt={img.caption} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* Photo grid — additional images */}
        {/* <div className="gallery-grid">
          {allImages.map((img, i) => (
            <div
              key={i}
              className="gallery-grid-item"
              onClick={() => setLightbox(i)}
            >
              <img src={img.src} alt={img.caption} loading="lazy" />
              <div className="gallery-grid-overlay">
                <span>🔍</span>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Lightbox */}
      {/* {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>
            &times;
          </button>
          <img
            src={allImages[lightbox].src}
            alt={allImages[lightbox].caption}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox-caption">{allImages[lightbox].caption}</p>
        </div>
      )} */}
    </section>
  );
}

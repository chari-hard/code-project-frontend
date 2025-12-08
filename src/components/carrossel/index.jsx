import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './style.css';

export function EmblaCarousel({ images }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div className="embla__slide" key={index}>
            <img src={src} className="embla_image" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

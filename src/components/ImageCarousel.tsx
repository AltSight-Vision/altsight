import { useState } from "react";

interface ImageCarouselProps {
  images?: string[]; // Made optional to handle undefined cases
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return null; // Do not render if images array is null, undefined, or empty
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={styles.carouselContainer}>
      {/* Show arrows only if there is more than one image */}
      {images.length > 1 && (
        <button onClick={prevImage} style={styles.arrowButton}>
          ◀
        </button>
      )}
      <div style={styles.imageWrapper}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={styles.image}
        />
      </div>
      {images.length > 1 && (
        <button onClick={nextImage} style={styles.arrowButton}>
          ▶
        </button>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "100%",
    margin: "auto",
  },
  arrowButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  },
  imageWrapper: {
    width: "100%",
    maxWidth: "500px",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
};

export default ImageCarousel;

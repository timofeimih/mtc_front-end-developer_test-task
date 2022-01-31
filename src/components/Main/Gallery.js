import Container from "../Layout/Container";
import styles from "./Gallery.module.css";
import galleryImg1 from "../../assets/Bitmap-2-min.png";
import galleryImg1x2 from "../../assets/Bitmap-2@2x-min.png";
import galleryImg2 from "../../assets/Bitmap-3-min.png";
import galleryImg2x2 from "../../assets/Bitmap-3@2x-min.png";
import galleryImg3 from "../../assets/Bitmap-min.png";
import galleryImg3x2 from "../../assets/Bitmap@2x-min.png";
import galleryImg4 from "../../assets/Bitmap-1-min.png";
import galleryImg4x2 from "../../assets/Bitmap-1@2x-min.png";
import Button from "../UI/Button";

const Gallery = () => {
  return (
    <Container id="gallery" className={styles.galleryContainer}>
      <h3>Customer Gallery</h3>
      <div className={styles.gallery}>
        <div>
          <img
            src={galleryImg1}
            srcSet={`${galleryImg1} 1x, ${galleryImg1x2} 2x`}
            alt='gallery image 1'
          />
        </div>
        <div>
          {" "}
          <img
            src={galleryImg2}
            srcSet={`${galleryImg2} 1x, ${galleryImg2x2} 2x`}
            alt='gallery image 2'
          />{" "}
        </div>
        <div>
          <img
            src={galleryImg3}
            srcSet={`${galleryImg3} 1x, ${galleryImg3x2} 2x`}
            alt='gallery image 3'
          />{" "}
        </div>
        <div>
          <img
            src={galleryImg4}
            srcSet={`${galleryImg4} 1x, ${galleryImg4x2} 2x`}
            alt='gallery image 4'
          />
        </div>
      </div>

      <Button className="center">View more</Button>
    </Container>
  );
};

export default Gallery;

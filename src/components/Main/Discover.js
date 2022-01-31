import styles from "./Discover.module.css";
import Container from "../Layout/Container";
import sectionImg from "../../assets/Bitmap-4-min.png";
import sectionImgx2 from '../../assets/Bitmap-4@2x-min.png';
import Button from "../UI/Button";

const Discover = () => {
  return (
    <div className={styles.discover}>
      <div className={styles.discoverImage}>
        <img src={sectionImg} srcSet={`${sectionImg} 1x, ${sectionImgx2} 2x`} alt="discover image" />
      </div>
      <Container>
        <div className={styles.content}>
          <div className={styles.small}>
            Quality Craftmanship from build to delivery
          </div>
          <p className={styles.heading}>
            Discover the beauty of a handmade kitchen
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
            feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
            eu pharetra tincidunt, mauris purus ultrices.
          </p>
          <Button>About us</Button>
        </div>
      </Container>
    </div>
  );
};

export default Discover;

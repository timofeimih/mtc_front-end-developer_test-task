import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Button from "../UI/Button";
import heroImage0_5x from "../../assets/Bitmap-5@0_5x-min.png";
import heroImage from "../../assets/Bitmap-5-min.png";
import heroImage2x from "../../assets/Bitmap-5@2x-min.png";

const DUMMY_HEROES = [
  {
    id: 1,
    small: "Design and order your new kitchen online today",
    title: "Bespoke & made to measure handmade kitchen design",
    image0_5x: heroImage0_5x,
    image: heroImage,
    image2x: heroImage2x,
  },
  {
    id: 2,
    small: "Design and order your new kitchen online today 2",
    title: "Bespoke & made to measure handmade kitchen design",
    image0_5x: heroImage0_5x,
    image: heroImage,
    image2x: heroImage2x,
  },
  {
    id: 3,
    small: "Design and order your new kitchen online today 3",
    title: "Bespoke & made to measure handmade kitchen design",
    image0_5x: heroImage0_5x,
    image: heroImage,
    image2x: heroImage2x,
  },
];

const getWindowsWidth = () => {
  let windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  //   if (windowWidth < 750) windowWidth = 750;

  return windowWidth;
};

const Hero = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [heroesWidth, setHeroesWidth] = useState({
    window: DUMMY_HEROES.length * getWindowsWidth(),
    heroes: getWindowsWidth(),
  });

  useEffect(() => {
    const updateSize = () => {
      setHeroesWidth({
        window: DUMMY_HEROES.length * getWindowsWidth(),
        heroes: getWindowsWidth(),
      });
    };
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const setHeroHandler = (heroNum) => {
    setCurrentHero(heroNum);
  };

  return (
    <div className={styles.heroContainer}>
      <div
        className={styles.heroes}
        style={{
          width: heroesWidth.window,
          transform: `translateX(-${heroesWidth.heroes * currentHero}px)`,
        }}
      >
        {DUMMY_HEROES.map((hero) => {
          let image = hero.image0_5x;
          let windowSize = getWindowsWidth();
          if (windowSize > 1500) image = hero.image;
          if (windowSize > 2000) image = hero.image2x;

          return (
            <div
              key={hero.id}
              className={styles.hero}
              style={{
                width: heroesWidth.heroes,
                background: `url(${image})`,
              }}
            >
              <section>
                <div>
                  <div className={styles.small}>{hero.small}</div>
                  <h1>{hero.title}</h1>
                </div>
                <Button>ORDER NOW</Button>
              </section>
            </div>
          );
        })}
      </div>
      <div className={styles.controls}>
        <span
          className={currentHero === 0 ? styles.active : ""}
          onClick={() => setHeroHandler(0)}
        ></span>
        <span
          className={currentHero === 1 ? styles.active : ""}
          onClick={() => setHeroHandler(1)}
        ></span>
        <span
          className={currentHero === 2 ? styles.active : ""}
          onClick={() => setHeroHandler(2)}
        ></span>
      </div>
    </div>
  );
};

export default Hero;

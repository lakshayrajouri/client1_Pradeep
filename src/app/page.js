import Image from "next/image";
import styles from "./styles/page.module.css";
import Testimonial from "./component/testimonial";

export default function Home() {
  return (
    <div>
      <section className={`${styles.banner} ${styles.slideUpp}`}>
        <div className={styles.bannerDiv}>
          <div className={styles.bannerBase}></div>
          <div className={styles.bannerContent}>
            <div>
              <hr />
              <h1>
                YOUR COMPANY <br /> NAME
              </h1>
            </div>
            <div>
              <p>Architecture for Inspired Living</p>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.slideShow}>
        <div className={styles.slides}>
          <div className={`${styles.item} ${styles.item1}`}>1</div>
          <div className={`${styles.item} ${styles.item2}`}>2</div>
          <div className={`${styles.item} ${styles.item3}`}>3</div>
          <div className={`${styles.item} ${styles.item4}`}>4</div>
          <div className={`${styles.item} ${styles.item5}`}>5</div>
          <div className={`${styles.item} ${styles.item6}`}>6</div>
          <div className={`${styles.item} ${styles.item7}`}>7</div>
          <div className={`${styles.item} ${styles.item8}`}>8</div>
        </div>
      </section>
      <section className={styles.projects}></section>
      <section className={styles.howWeWork}>
        <div className={styles.card}>
          <p>
            <span>Project 1</span>
          </p>
          <p>
            <span>Project 2</span>
          </p>
          <p>
            <span>Project 3</span>
          </p>
        </div>
      </section>
      <section>
        <h3>Testimonial</h3>
        <div className={styles.testimonial}>
          <Testimonial />
        </div>
      </section>
      <section className={styles.awards}></section>
      <hr />
    </div>
  );
}

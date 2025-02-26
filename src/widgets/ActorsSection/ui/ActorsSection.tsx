import styles from "./ActorsSection.module.scss";
import { SwiperCustom } from "shared/ui";
import { SwiperSlide } from "swiper/react";
import { actors } from "shared/text/actors";

export function ActorSection() {
  return (
    <section className={`${styles.actors} container`}>
      <h2>Актерский состав</h2>
      <div className={styles.slider}>
        <SwiperCustom>
          {actors.map((item, num) => (
            <SwiperSlide key={num} className={styles.card}>
              <img src={item.img} alt={item.name} />
              <div className={styles.text}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.actor}>{item.actor}</p>
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </SwiperSlide>
          ))}
        </SwiperCustom>
      </div>
    </section>
  );
}

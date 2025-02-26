import styles from "./ShopSection.module.scss";

export function ShopSection() {
  return (
    <section className={`${styles.shop} container`}>
      <h2>Магазины мерча ведьмака</h2>
      <div className={styles.map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa1c87e2e5b60473b394ff12f80e04cf65b59d16ed9c24daef1767715dc8664b7&amp;source=constructor"
          width="100%"
          height="540"
        ></iframe>
      </div>
    </section>
  );
}

import { AppLink, AppLinkTheme } from "shared/ui";
import styles from "./SeeSerialSection.module.scss";
import cover from "./cover.jpg";

export function SeeSerialSection() {
  return (
    <section
      className={styles.seeserial}
      style={{
        background: `linear-gradient(270deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${cover})`,
        backgroundSize: "cover",
      }}
    >
      <div className={`${styles.container} container`}>
        <h1 className={styles.title}>Сериал Ведьмак</h1>
        <p className={styles.desc}>
          Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации,
          идет навстречу своей судьбе в неспокойном мире, где люди часто
          оказываются куда коварнее чудовищ.
        </p>
        <AppLink to="/" theme={AppLinkTheme.COLOR}>
          Смотреть сериал
        </AppLink>
      </div>
    </section>
  );
}

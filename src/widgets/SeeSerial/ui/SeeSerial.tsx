import { AppLink, AppLinkTheme } from "shared/ui";
import styles from "./SeeSerial.module.scss";

export function SeeSerial() {
  return (
    <section className={styles.seeserial}>
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

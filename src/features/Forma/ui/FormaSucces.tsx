import styles from "./Forma.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui";

export function FormaSuccess() {
  return (
    <div className={styles.success}>
      <h1>Заявка отправлена!</h1>
      <p>
        Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее
        время, чтобы уточнить все детали заказа.
      </p>
      <AppLink theme={AppLinkTheme.COLOR} to="/">
        Вернуться на главную
      </AppLink>
    </div>
  );
}

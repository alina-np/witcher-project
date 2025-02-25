import styles from "./Header.module.scss";
import logoimg from "../../../shared/assets/images/logo.png";
import { AppLink, AppLinkTheme } from "shared/ui";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const { pathname } = useLocation();

  return (
    <header className={`${styles.header} container`}>
      <div className={styles.logo}>
        {location.pathname === "/" ? (
          <img src={logoimg} alt="Лого" />
        ) : (
          <AppLink to="/">
            <img src={logoimg} alt="Лого" />
          </AppLink>
        )}
      </div>
      <AppLink to="/application" theme={AppLinkTheme.OPACITYTHIN}>
        Подключить подписку
      </AppLink>
    </header>
  );
}

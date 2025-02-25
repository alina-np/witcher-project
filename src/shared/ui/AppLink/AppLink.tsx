import { Link, LinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  COLOR = "color",
  OPACITYBIG = "opacitybig",
  OPACITYTHIN = "opacitythin",
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
}

export const AppLink = ({
  to,
  children,
  theme,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link to={to} className={`${styles.link} ${styles[theme]}`} {...otherProps}>
      {children}
    </Link>
  );
};

import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  COLOR = "color",
  OPACITYBIG = "opacitybig",
  OPACITYTHIN = "opacitythin",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export const Button = ({ children, theme, ...otherProps }: ButtonProps) => {
  return (
    <button className={`${styles.btn} ${styles[theme]}`} {...otherProps}>
      {children}
    </button>
  );
};

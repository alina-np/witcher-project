import styles from "./Icon.module.scss";
import Instagram from "../../assets/icon/instagram.svg";
import Vk from "../../assets/icon/vk.svg";
import Facebook from "../../assets/icon/facebook.svg";
import Arrowleft from "../../assets/icon/arrowleft.svg";
import Arrowright from "../../assets/icon/arrowright.svg";
import File from "../../assets/icon/file.svg";

export enum IconType {
  INSTAGRAM = "instagram",
  VK = "vk",
  FACEBOOK = "facebook",
  ARROWLEFT = "arrowleft",
  ARROWRIGHT = "arrowright",
  FILE = "file",
}

export enum IconTheme {
  SOCIAL = "social",
  NAVIGATION = "NAVIGATION",
}

export type IconProps = {
  type: IconType;
  theme?: IconTheme;
};

export function Icon({ type, theme }: IconProps) {
  const iconMap = {
    [IconType.INSTAGRAM]: Instagram,
    [IconType.VK]: Vk,
    [IconType.FACEBOOK]: Facebook,
    [IconType.ARROWLEFT]: Arrowleft,
    [IconType.ARROWRIGHT]: Arrowright,
    [IconType.FILE]: File,
  };

  const IconComponent = iconMap[type];

  return <IconComponent className={`&{styles.icon} ${styles[theme]}`} />;
}

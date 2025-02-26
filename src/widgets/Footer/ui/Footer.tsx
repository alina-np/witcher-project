import { useState } from "react";
import styles from "./Footer.module.scss";
import { AppLink, Icon, IconType, IconTheme, Modal } from "shared/ui";
import logoimg from "../../../shared/assets/images/logo.png";
import { policy } from "shared/text/policy";

export function Footer() {
  const [isActive, setIsActive] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footercontainer} container`}>
        <div className={styles.logo}>
          <img src={logoimg} alt="Лого" />
        </div>
        <div className={styles.policy} onClick={() => setIsActive(true)}>
          Политика обработки персональных данных
        </div>
        <div className={styles.social}>
          <AppLink to="/">
            <Icon type={IconType.INSTAGRAM} theme={IconTheme.SOCIAL} />
          </AppLink>
          <AppLink to="/">
            <Icon type={IconType.FACEBOOK} theme={IconTheme.SOCIAL} />
          </AppLink>
          <AppLink to="/">
            <Icon type={IconType.VK} theme={IconTheme.SOCIAL} />
          </AppLink>
        </div>
      </div>
      <Modal active={isActive} setActive={setIsActive}>
        <div>
          {policy.map((section, index) => (
            <div key={index}>
              <h2 className={styles.policytitle}>{section.title}</h2>
              {section.list.map((item, key) => (
                <div key={key} className={styles.paragraph}>
                  <h3 className={styles.paragraphtitle}>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Modal>
    </footer>
  );
}

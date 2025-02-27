import styles from "./ApplicationPage.module.scss";
import { socials } from "shared/text/socials";
import { Forma } from "features/Forma/ui/Forma";

const ApplicationPage = () => {
  return (
    <main className="main">
      <section className={`${styles.applicationpage} container`}>
          <Forma />
          <div className={styles.socialscontainer}>
            {socials.map((item, key) => (
              <div className={styles.socials} key={key}>
                <h3 className={styles.socialstitle}>{item.info}</h3>
                <p className={styles.socialstext}>{item.text}</p>
              </div>
            ))}
          </div>
      </section>
    </main>
  );
};

export default ApplicationPage;

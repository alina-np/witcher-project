import styles from "./KadrSection.module.scss";
import { Button, ButtonTheme, Loader } from "shared/ui";
import { useGallery } from "shared/hooks/useGallery";

export function KadrSection() {
  const { displayedPhotos, loading, handleLoadMore, showLoadMoreButton } =
    useGallery();

  return (
    <section className={`${styles.kadr} container`}>
      <h2>Кадры со сьемок</h2>
      <div className={styles.kadrcontainer}>
        {displayedPhotos.map((item, key) => (
          <div key={key}>
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
      {loading && <Loader />}
      {showLoadMoreButton && (
        <Button onClick={handleLoadMore} theme={ButtonTheme.OPACITYBIG}>
          Показать еще
        </Button>
      )}
    </section>
  );
}

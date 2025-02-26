import styles from "./KadrSection.module.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMore } from "../models/redux/reducers/gallerySlice";
import { RootState } from "../models/redux/store";
import { Button, ButtonTheme, Loader } from "shared/ui";

export function KadrSection() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { photos, count } = useSelector((state: RootState) => state.gallery);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(loadMore());
      setLoading(false);
    }, 1500);
  };

  const displayedPhotos = photos.slice(0, count);

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
      {count < photos.length && (
        <Button onClick={handleLoadMore} theme={ButtonTheme.OPACITYBIG}>
          Загрузить еще
        </Button>
      )}
    </section>
  );
}

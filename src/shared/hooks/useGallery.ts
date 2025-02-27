import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMore } from "widgets/KadrSection/models/redux/reducers/gallerySlice";
import { RootState } from "widgets/KadrSection/models/redux/store";

interface UseGalleryResult {
  displayedPhotos: { img: string; alt: string }[];
  loading: boolean;
  handleLoadMore: () => void;
  showLoadMoreButton: boolean;
}

export const useGallery = (): UseGalleryResult => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { photos, count } = useSelector((state: RootState) => state.gallery);

  const handleLoadMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch(loadMore());
      setLoading(false);
    }, 1500);
  }, [dispatch]);

  const displayedPhotos = photos.slice(0, count);
  const showLoadMoreButton = count < photos.length;

  return {
    displayedPhotos,
    loading,
    handleLoadMore,
    showLoadMoreButton,
  };
};

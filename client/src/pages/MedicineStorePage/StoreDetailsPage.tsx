import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loader } from '../../components/ui/Loader/Loader';
import { Rating } from '../../components/ui/Rating/Rating';
import { StatusBadge } from '../../components/ui/StatusBadge/StatusBadge';
import { fetchStores } from '../../redux/stores/storesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './MedicineStorePage.module.css';

export function StoreDetailsPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { all: stores, status } = useAppSelector((state) => state.stores);
  const store = stores.find((item) => item._id === id);

  useEffect(() => {
    if (!store && status === 'idle') dispatch(fetchStores());
  }, [dispatch, status, store]);

  if (!store && status === 'loading') return <Loader />;

  return (
    <section className={`container ${styles.page}`}>
      {store ? (
        <article className={styles.details}>
          <div className={styles.detailsHeader}>
            <h1>{store.name}</h1>
            <StatusBadge isOpen={store.isOpen} />
          </div>
          <Rating value={store.rating} variant="stars" />
          <p>{store.address}</p>
          <p>{store.phone}</p>
          <Link to="/medicine-store">Back to medicine stores</Link>
        </article>
      ) : (
        <p className={styles.emptyState}>Store not found. <Link to="/medicine-store">Browse medicine stores</Link></p>
      )}
    </section>
  );
}

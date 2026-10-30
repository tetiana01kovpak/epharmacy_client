import { Rating } from '../ui/Rating/Rating';
import { StatusBadge } from '../ui/StatusBadge/StatusBadge';
import type { Store } from '../../types';
import { Link } from 'react-router-dom';
import styles from './StoreCard.module.css';

type StoreCardProps = {
  store: Store;
  showVisitButton?: boolean;
};

export function StoreCard({ store, showVisitButton = true }: StoreCardProps) {
  const [addressLine1, ...addressRest] = store.address.split(', ');
  const addressLine2 = addressRest.join(', ');

  return (
    <article className={styles.card}>
      <span className={styles.decor} aria-hidden="true">
        <span className={styles.decorShape1} />
        <span className={styles.decorShape2} />
        <span className={styles.decorShape3} />
      </span>

      <div className={styles.header}>
        <h3 className={styles.name}>{store.name}</h3>
      </div>

      <p className={styles.detail}>
        <img className={styles.detailIcon} src="/icons/map-pin-green.svg" alt="" />
        <span className={styles.addressLines}>
          <span>{addressLine1}</span>
          {addressLine2 && <span>{addressLine2}</span>}
        </span>
      </p>
      <p className={styles.detail}>
        <img className={styles.detailIcon} src="/icons/phone-green.svg" alt="" />
        {store.phone}
      </p>
      {showVisitButton && (
        <div className={styles.footer}>
          <Link to={`/medicine-store/${store._id}`} className={styles.visitButton}>Visit Store</Link>
          <div className={styles.headerRight}>
            <Rating value={store.rating} />
            <StatusBadge isOpen={store.isOpen} />
          </div>
        </div>
      )}
      {!showVisitButton && (
        <div className={styles.cardMeta}>
          <Rating value={store.rating} />
          <StatusBadge isOpen={store.isOpen} />
        </div>
      )}
      {!showVisitButton && (
        <Link
          to={`/medicine-store/${store._id}`}
          className={styles.cardOverlayLink}
          aria-label={`View ${store.name} details`}
        />
      )}

    </article>
  );
}

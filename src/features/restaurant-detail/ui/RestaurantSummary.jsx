import { Icon } from '@/components/Icon/Icon'

import styles from './RestaurantSummary.module.css'

export const RestaurantSummary = ({ thumb_nail, name, address, distance, phone }) => {
  const metadata = [
    { icon: 'map-location', label: address },
    { icon: 'map-school', label: `${distance}m` },
    { icon: 'map-phone', label: phone },
  ]

  return (
    <>
      <img src={thumb_nail} alt='식당 이미지' className={styles.thumbnail} />

      <section className={styles.info}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <Icon name={'review-fill'} size={20} />
          <span className={styles.rating}>3</span>
          {/* <span>{rating}</span> */}
        </div>

        <div className={styles.metaList}>
          {metadata.map(({ icon, label }) => (
            <div key={icon} className={styles.metaItem}>
              <Icon name={icon} size={20} />
              <p className={styles.metaText}>{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

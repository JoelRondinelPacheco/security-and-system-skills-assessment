import React from 'react'
import { Interest } from '@/lib/interest/domain/interest'
import styles from './styles.module.css'
import { getCardIcon } from '../utils'


const InterestCard = ({ title, description, icon }: Interest) => {

  const iconCard = getCardIcon(icon, {width: "1.2em", height: "1.2em"});

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
    {
      iconCard
    }
      </div>
      <div>
      <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>
          {description}
        </p>
        </div>
    </div>
  )
}

export default InterestCard
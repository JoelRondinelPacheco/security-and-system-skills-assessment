import React from 'react'
import { Interest } from '@/lib/interest/domain/interest'
import styles from './styles.module.css'


const InterestCard = ({ title, description }: Interest) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>

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
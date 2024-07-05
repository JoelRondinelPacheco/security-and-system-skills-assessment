import React from 'react'
import { getAllInterest } from '@/lib/interest/application/getAllInterestUseCase'
import { Interest } from '@/lib/interest/domain/interest'
import { InterestRepository } from '@/lib/interest/domain/interest-respository'
import { createInterestMockRepository } from '@/lib/interest/infrastructure/mock-repository'
import InterestCard from './interest-card/interest-card'
import styles from './styles.module.css'

const interestRepository: InterestRepository = createInterestMockRepository();

const AllInterests = async () => {

  const interest: Interest[] = await getAllInterest(interestRepository);

  return (
    <section className={`container`}>
      <div className={`wrapper ${styles.wrapper}`}>
      {
        interest.map((interest, index) => {
          return <InterestCard key={index} {...interest}/>
        }
      )
      }
      </div>
    </section>
  )
}

export default AllInterests
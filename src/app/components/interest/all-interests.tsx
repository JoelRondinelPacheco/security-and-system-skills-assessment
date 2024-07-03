import { getAllInterest } from '@/lib/interest/application/getAllInterestUseCase'
import { Interest } from '@/lib/interest/domain/interest'
import { InterestRepository } from '@/lib/interest/domain/interest-respository'
import { createInterestMockRepository } from '@/lib/interest/infrastructure/mock-repository'
import React from 'react'
import InterestCard from './interest-card'

const interestRepository: InterestRepository = createInterestMockRepository();

const AllInterests = async () => {

  const interest: Interest[] = await getAllInterest(interestRepository);

  return (
    <div>
      {
        interest.map((interest, index) => {
          return <InterestCard key={index} {...interest}/>
        }
      )
      }
    </div>
  )
}

export default AllInterests
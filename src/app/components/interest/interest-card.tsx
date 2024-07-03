import { Interest } from '@/lib/interest/domain/interest'
import React from 'react'

const InterestCard = ({ title, description }: Interest) => {
  return (
    <div>{title}</div>
  )
}

export default InterestCard
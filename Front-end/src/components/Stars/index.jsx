import React from 'react'
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md'

export default function Stars() {
  return (
    <div className="star_id">
      <MdStar className="star" />
      <MdStar className="star" />
      <MdStar className="star" />
      <MdStarHalf className="star" />
      <MdStarBorder className="star" />
    </div>
  )
}

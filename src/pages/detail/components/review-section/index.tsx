import { FC } from 'react'

import { IRestaurantDetails } from '~/types'

interface Props {
  restaurant: IRestaurantDetails
}

const ReviewSection: FC<Props> = ({ restaurant }) => {
  return (
    <div className="px-5 pb-16 sm:px-10">
      <p className="mb-2 font-semibold">{`Review (${restaurant.customerReviews.length})`}</p>
      {restaurant.customerReviews.map((item, idx) => (
        <div className="py-2" key={idx}>
          <p className="font-medium text-[#082c54]">{item.name}</p>
          <p className="text-xs text-gray-600">{item.date}</p>
          <p className="text-sm">{item.review}</p>
        </div>
      ))}
    </div>
  )
}

export default ReviewSection

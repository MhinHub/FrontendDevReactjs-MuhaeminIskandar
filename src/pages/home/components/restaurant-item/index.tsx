import { FC } from 'react'
import { Link } from 'react-router-dom'

import { IListResponse } from '~/types'
import { Button, StarRating } from '~/components'

interface Props {
  item: IListResponse
}

const RestaurantItem: FC<Props> = ({ item }) => {
  return (
    <div className="w-full rounded-3xl bg-white/60 px-6 py-4 shadow-2xl">
      <img
        loading="lazy"
        className="h-40 w-full rounded-xl object-cover transition-all duration-300 hover:scale-110"
        src={`https://restaurant-api.dicoding.dev/images/medium/${item.pictureId}`}
      />
      <p className="mt-2 w-full truncate font-semibold">{item.name}</p>
      <StarRating rating={item.rating} />
      <div className="mt-2 flex w-full items-center justify-between text-xs uppercase text-gray-600">
        <p>
          <span>{item.categories[0].name}</span>
          <span className="mx-[2px]">&#x2022;</span>
          {[...Array(item.priceLevel)].map((_, idx) => (
            <span key={idx}>$</span>
          ))}
        </p>

        <div className="flex items-center">
          <div
            className={`mr-1 h-2 w-2 rounded-full ${
              item.isOpen ? 'bg-teal-500' : 'bg-red-500'
            }`}
          />
          <p>{item.isOpen ? 'OPEN NOW' : 'CLOSED'}</p>
        </div>
      </div>
      <Link to={`detail/${item.id}`}>
        <Button variant="primary" width="full" className="mt-6 rounded-full">
          LEARN MORE
        </Button>
      </Link>
    </div>
  )
}

export default RestaurantItem

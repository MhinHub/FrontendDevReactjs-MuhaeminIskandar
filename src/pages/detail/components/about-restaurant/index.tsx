import { FC } from 'react'
import { Link } from 'react-router-dom'

import { StarRating } from '~/components'
import { IRestaurantDetails } from '~/types'

interface Props {
  restaurant: IRestaurantDetails
}

const AboutRestaurant: FC<Props> = ({ restaurant }) => {
  return (
    <div className="px-5 sm:px-10">
      <div className="relative flex h-80 w-full overflow-hidden rounded-t-2xl shadow">
        <div className="mx-10 mb-5 flex w-full items-end justify-between">
          <p className="text-3xl font-bold leading-tight text-white">
            {restaurant.name}
          </p>
          <Link
            target="_blank"
            className="w-fit text-base text-blue-400 hover:text-blue-600"
            to={`https://www.google.com/maps/search/${encodeURIComponent(
              `${restaurant.address} ${restaurant.city}`
            )}`}
          >
            {`${restaurant.address} ${restaurant.city}`}
          </Link>
        </div>
        <StarRating
          rating={restaurant.rating}
          className="absolute right-10 top-10 text-blue-400"
        />
        <div className="absolute -z-10 h-full w-full bg-gradient-to-t from-black/90 to-transparent" />
        <img
          loading="lazy"
          alt="img_dtl"
          className="absolute -z-20 h-auto w-full object-fill object-center"
          src={`https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`}
        />
      </div>
      <div className="flex items-center justify-between gap-10 px-10 py-5">
        <p className="py-5 text-gray-700">&emsp; {restaurant.description}</p>
        <iframe
          className="gmap_iframe"
          title="Google Map"
          src="https://maps.google.com/maps?width=360&amp;height=240&amp;hl=en&amp;q=Rumah%20Makan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  )
}

export default AboutRestaurant

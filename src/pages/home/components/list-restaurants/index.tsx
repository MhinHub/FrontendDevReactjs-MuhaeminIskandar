import { FC, Suspense, lazy } from 'react'

const RestaurantItem = lazy(() => import('../restaurant-item'))
import { IListResponse, IListRestaurant } from '~/types'

interface Props {
  pagination: number
  data: IListRestaurant
  checkFilterred: (item: IListResponse) => boolean
}

const ListRestaurants: FC<Props> = ({ checkFilterred, data, pagination }) => {
  return (
    <div className="px-5 pb-12 pt-6 sm:px-10">
      <p className="text-2xl capitalize">All Restaurants</p>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
        {data?.listResponse?.map((item, idx) => {
          if (idx < pagination * 8 && checkFilterred(item))
            return (
              <Suspense fallback={<div>Loading...</div>} key={idx}>
                <RestaurantItem key={idx} item={item} />
              </Suspense>
            )
        })}
      </div>
    </div>
  )
}

export default ListRestaurants

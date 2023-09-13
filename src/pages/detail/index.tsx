import { FC, Fragment } from 'react'
import { useLoaderData } from 'react-router-dom'

import { IRestaurantDetailsResponse } from '~/types'
import {
  TopSection,
  TableSection,
  ReviewSection,
  AboutRestaurant
} from './components'

const Detail: FC = () => {
  const { restaurant } = useLoaderData() as IRestaurantDetailsResponse

  return (
    <Fragment>
      <TopSection />
      <AboutRestaurant restaurant={restaurant} />
      <TableSection restaurant={restaurant} />
      <ReviewSection restaurant={restaurant} />
    </Fragment>
  )
}

export default Detail

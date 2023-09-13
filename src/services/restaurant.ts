import axios from 'axios'
import { defer } from 'react-router-dom'

import {
  IListResponse,
  IRestaurantResponse,
  IRestaurantDetailsResponse
} from '~/types'

export async function getAll() {
  const listResponse: IListResponse[] = []

  const response = await axios.get('https://restaurant-api.dicoding.dev/list')
  const data = response.data as IRestaurantResponse

  if (!data.restaurants) {
    return defer({ listResponse })
  }

  const detailPromises = data.restaurants.map(async (item) => {
    const detailResponse = await axios.get(
      `https://restaurant-api.dicoding.dev/detail/${item.id}`
    )
    const detail = detailResponse.data as IRestaurantDetailsResponse
    listResponse.push({
      ...item,
      ...detail.restaurant,
      priceLevel: Math.floor(Math.random() * 4) + 1,
      isOpen: (Math.floor(Math.random() * 100) + 1) % 3 !== 0
    })
  })

  await Promise.all(detailPromises)

  return defer({ listResponse })
}

export async function getDetail(id: string) {
  const response = await axios.get(
    `https://restaurant-api.dicoding.dev/detail/${id}`
  )
  return defer({ ...response.data })
}

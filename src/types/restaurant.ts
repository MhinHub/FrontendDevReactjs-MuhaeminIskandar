export interface IRestaurant {
  detail: IRestaurantDetails
  id: string
  name: string
  city: string
  rating: number
  pictureId: string
  description: string
}

export interface IRestaurantResponse {
  count?: number
  error?: boolean
  message?: string
  restaurants?: IRestaurant[]
}

export interface ICategory {
  name: string
}

interface ICustomerReview {
  name: string
  date: string
  review: string
}

export interface IRestaurantDetails {
  id: string
  name: string
  city: string
  rating: number
  address: string
  pictureId: string
  description: string
  categories: ICategory[]
  menus: {
    foods: ICategory[]
    drinks: ICategory[]
  }
  customerReviews: ICustomerReview[]
}

export interface IRestaurantDetailsResponse {
  error: boolean
  message: string
  restaurant: IRestaurantDetails
}

export interface IListResponse extends IRestaurantDetails, IRestaurant {
  priceLevel: number
  isOpen: boolean
}

export interface IListRestaurant {
  listResponse?: IListResponse[]
}

export interface IFilter {
  price?: string
  isOpen?: boolean
  category?: string
}

import { useLoaderData } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'

import { IFilter, IListResponse, IListRestaurant } from '~/types'

const initialFilter: IFilter = {
  isOpen: false,
  price: undefined,
  category: undefined
}
const listPrices = ['$', '$$', '$$$', '$$$$']

export function useHome() {
  const data = useLoaderData() as IListRestaurant

  const [pagination, setPagination] = useState<number>(1)
  const [categories, setcategories] = useState<string[]>([])
  const [filter, setFilter] = useState<IFilter>(initialFilter)

  function toNextPagination() {
    if (pagination > 2) return
    setPagination(pagination + 1)
  }

  function changeOpen() {
    setFilter((prev) => {
      return { ...prev, isOpen: !prev.isOpen }
    })
  }

  function selectCategory(category: string) {
    setFilter((prev) => {
      return { ...prev, category }
    })
  }

  function selectPrice(price: string) {
    setFilter((prev) => {
      return { ...prev, price }
    })
  }

  function resetFilter() {
    setFilter(initialFilter)
  }

  function filterPrice(item: IListResponse): boolean {
    if (!filter.price) return true

    return filter.price.length === item.priceLevel
  }

  function filterCategory(item: IListResponse): boolean {
    if (!filter.category) return true

    return item.categories[0].name === filter.category
  }

  function filterOpen(item: IListResponse): boolean {
    if (!filter.isOpen) return true

    return item.isOpen
  }

  function checkFilterred(item: IListResponse): boolean {
    if (filter === initialFilter) return true
    return filterCategory(item) && filterPrice(item) && filterOpen(item)
  }

  const getCategory = useCallback(() => {
    const newCategory: string[] = []
    if (!data.listResponse) return

    data.listResponse.forEach((item) => {
      item.categories.forEach((category) => {
        if (newCategory.includes(category.name)) return
        newCategory.push(category.name)
      })
    })

    setcategories(newCategory)
  }, [setcategories, data])

  useEffect(() => {
    getCategory()
  }, [data, getCategory])

  return {
    datas: { data, categories, pagination, filter, listPrices, initialFilter },
    methods: {
      changeOpen,
      resetFilter,
      selectPrice,
      selectCategory,
      checkFilterred,
      toNextPagination
    }
  }
}

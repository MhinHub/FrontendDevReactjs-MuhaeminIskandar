import { FC } from 'react'

import { IFilter } from '~/types'
import { Button, Dropdown } from '~/components'

interface Props {
  filter: IFilter
  listPrices: string[]
  categories: string[]
  changeOpen: () => void
  initialFilter: IFilter
  resetFilter: () => void
  selectPrice: (price: string) => void
  selectCategory: (category: string) => void
}

const FilterSection: FC<Props> = ({
  filter,
  changeOpen,
  listPrices,
  categories,
  selectPrice,
  resetFilter,
  initialFilter,
  selectCategory
}) => {
  return (
    <div className="px-5 py-6">
      <div className="flex flex-col justify-between gap-3 border-y-[1px] border-y-gray-300 px-5 py-4 text-sm sm:flex-row sm:items-center sm:gap-0">
        <div className="flex items-center gap-3">
          <p>Filter By :</p>
          <div className="flex w-fit items-center gap-1 truncate border-b-[1px] border-b-gray-400">
            <input type="radio" onChange={changeOpen} checked={filter.isOpen} />
            <p>Open Now</p>
          </div>
          <Dropdown
            name="Categories"
            menus={categories}
            seleted={filter.category}
            onSelect={(category) => selectCategory(category)}
          />
          <Dropdown
            name="Price"
            menus={listPrices}
            seleted={filter.price}
            onSelect={(price) => selectPrice(price)}
          />
        </div>
        <Button
          width="fit"
          variant="secondary"
          onClick={resetFilter}
          disabled={filter === initialFilter}
        >
          Clear all
        </Button>
      </div>
    </div>
  )
}

export default FilterSection

import { FC, Fragment } from 'react'

import { useHome } from './hooks'
import { BottomSection, FilterSection, ListRestaurants } from './components'

const Home: FC = () => {
  const {
    datas: { data, pagination, filter, categories, listPrices, initialFilter },
    methods: {
      changeOpen,
      selectPrice,
      resetFilter,
      checkFilterred,
      selectCategory,
      toNextPagination
    }
  } = useHome()

  return (
    <Fragment>
      <FilterSection
        filter={filter}
        categories={categories}
        changeOpen={changeOpen}
        listPrices={listPrices}
        resetFilter={resetFilter}
        selectPrice={selectPrice}
        initialFilter={initialFilter}
        selectCategory={selectCategory}
      />
      <ListRestaurants
        data={data}
        pagination={pagination}
        checkFilterred={checkFilterred}
      />
      <BottomSection
        pagination={pagination}
        toNextPagination={toNextPagination}
      />
    </Fragment>
  )
}

export default Home

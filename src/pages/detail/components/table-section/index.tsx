import { FC } from 'react'

import { IRestaurantDetails } from '~/types'

interface Props {
  restaurant: IRestaurantDetails
}

const TableSection: FC<Props> = ({ restaurant }) => {
  return (
    <div className="px-5 text-gray-700 sm:px-10">
      <table className="my-6 w-full table-auto">
        <tr className="border-b-[1px] border-gray-400">
          <th className="flex w-28 justify-between py-2 text-start">
            Categories
          </th>
          <td>
            <div className="flex py-2">
              <p className="pr-2">:</p>
              <p>
                {restaurant.categories.map((item, idx) => (
                  <span key={idx}>
                    {idx > 0 ? ', ' + item.name : item.name}
                  </span>
                ))}
              </p>
            </div>
          </td>
        </tr>
        <tr className="border-b-[1px] border-gray-400">
          <th className="flex w-28 justify-between py-2 text-start">
            Foods Menu
          </th>
          <td>
            <div className="flex py-2">
              <p className="pr-2">:</p>
              <p>
                {restaurant.menus.foods.map((item, idx) => (
                  <span key={idx}>
                    {idx > 0 ? ', ' + item.name : item.name}
                  </span>
                ))}
              </p>
            </div>
          </td>
        </tr>
        <tr className="border-b-[1px] border-gray-400">
          <th className="flex w-28 justify-between py-2 text-start">
            Drinks Menu
          </th>
          <td>
            <div className="flex py-2">
              <p className="pr-2">:</p>
              <p>
                {restaurant.menus.drinks.map((item, idx) => (
                  <span key={idx}>
                    {idx > 0 ? ', ' + item.name : item.name}
                  </span>
                ))}
              </p>
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default TableSection

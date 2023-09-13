import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: FC = () => {
  return (
    <div className="px-5 py-3 sm:px-10">
      <p className="text-3xl sm:text-4xl">Restaurants</p>
      <p className="py-3 text-gray-600">
        Pretest Sekawan Media Challenge <br />
        RestAPI integration with{' '}
        <NavLink
          target="_blank"
          to={
            'https://restaurant-api.dicoding.dev/#/?id=dicoding-restaurant-api'
          }
          className={'text-blue-400 hover:text-blue-600'}
        >
          Dicoding Restaurant API
        </NavLink>
      </p>
    </div>
  )
}

export default Navbar

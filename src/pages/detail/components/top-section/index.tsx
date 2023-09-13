import { FC } from 'react'
import { Link } from 'react-router-dom'

const TopSection: FC = () => {
  return (
    <div className="px-5 py-6">
      <div className="flex flex-col justify-between gap-3 border-y-[1px] border-y-gray-300 px-0 py-4 text-sm sm:flex-row sm:items-center sm:gap-0 sm:px-5">
        <Link to={'/'} className="flex w-fit items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
              clipRule="evenodd"
            />
          </svg>
          <p>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default TopSection

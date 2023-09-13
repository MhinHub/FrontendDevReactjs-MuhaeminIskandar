import { FC } from 'react'

import { Button } from '~/components'

interface Props {
  pagination: number
  toNextPagination: () => void
}

const BottomSection: FC<Props> = ({ toNextPagination, pagination }) => {
  return (
    <div className="flex w-full justify-center px-5 pb-12">
      <div className="w-full sm:w-1/2 lg:w-1/3">
        <Button
          width="full"
          variant="secondary"
          disabled={pagination > 2}
          onClick={toNextPagination}
        >
          Load More
        </Button>
      </div>
    </div>
  )
}

export default BottomSection

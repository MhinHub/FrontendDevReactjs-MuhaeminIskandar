import { FC, Fragment, Suspense } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'

import { Footer, Loading, Navbar } from '~/components'

const RootLayout: FC = () => {
  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <Loading />
  }

  return (
    <Suspense fallback={<Loading />}>
      <Fragment>
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">
            <Navbar />
            <Outlet />
          </div>
          <Footer />
        </div>
      </Fragment>
    </Suspense>
  )
}

export default RootLayout

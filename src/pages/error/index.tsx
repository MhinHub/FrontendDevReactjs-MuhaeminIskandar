import { FC, Fragment } from 'react'
import { NavLink, isRouteErrorResponse, useRouteError } from 'react-router-dom'

import { Button, Footer, Navbar } from '~/components'

const ErrorBoundary: FC = () => {
  const error = useRouteError()

  return (
    <Fragment>
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col">
          <Navbar />
          <div className=" flex flex-1 flex-col items-center justify-center px-5 text-center">
            {isRouteErrorResponse(error) ? (
              <Fragment>
                <p className="text-6xl font-semibold">{error.status}</p>
                <p className="mt-2 text-lg sm:text-2xl">
                  Page {error.statusText}
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <p className="text-6xl font-semibold">Oops!</p>
                <p className="mt-2 text-lg sm:text-2xl">
                  Sorry, an unexpected error has occurred when loading your
                  page.
                </p>
              </Fragment>
            )}
            <NavLink to={'/'}>
              <Button variant="secondary" width="fit" className="my-6">
                Back to Home
              </Button>
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default ErrorBoundary

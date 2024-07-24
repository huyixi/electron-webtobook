import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'

export function ErrorElement() {
  const error = useRouteError()

  let errorMessage: string
  let errorStatus: number | string

  if (isRouteErrorResponse(error)) {
    // Error is a route error
    errorMessage = error.data?.message || error.statusText
    errorStatus = error.status
  } else if (error instanceof Error) {
    // Error is a JavaScript Error object
    errorMessage = error.message
    errorStatus = 'Error'
  } else if (typeof error === 'string') {
    // Error is a string
    errorMessage = error
    errorStatus = 'Error'
  } else {
    // Fallback for unknown error types
    errorMessage = 'An unexpected error occurred'
    errorStatus = 'Unknown Error'
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-700 mb-4">
          <strong>Error {errorStatus}:</strong> {errorMessage}
        </p>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again later or contact support if the
          problem persists.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}

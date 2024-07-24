import { Link } from 'react-router-dom'

export const NotFound = (): JSX.Element => {
  return (
    <div className="center size-full">
      404 Not Found
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

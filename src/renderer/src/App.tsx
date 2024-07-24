import { SearchInput } from './components/SearchInput'
import { Button } from './components/ui/button'

function App(): JSX.Element {
  return (
    <>
      <div className="flex">
        <SearchInput />
        <Button>Add</Button>
      </div>
    </>
  )
}

export default App

// pages/add/index.tsx
import { SearchInput } from '@/components/SearchInput'
import { Button } from '@/components/ui/button'

export default function Add() {
  return (
    <div className="flex">
      <SearchInput />
      <Button>Search</Button>
    </div>
  )
}

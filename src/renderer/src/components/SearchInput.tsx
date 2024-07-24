import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export function SearchInput() {
  return (
    <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <form>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="https://..." className="pl-8" />
        </div>
      </form>
    </div>
  )
}

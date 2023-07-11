import React from 'react'
import { searchBeer } from 'config'
import { GoodTypes } from 'types/good'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()
  const [search, setSearch] = React.useState('')
  const [foundBeer, setFoundBeer] = React.useState<GoodTypes.Card[]>([])

  const handleClose = () => {
    setFoundBeer([])
    setSearch('')
  }

  const goToBeer = (name: string) => {
    navigate(`/market/${name}`)
    handleClose()
  }

  React.useEffect(() => {
    if (search) {
      searchBeer(search).then(data => setFoundBeer(data))
    } else {
      handleClose()
    }
  }, [search])

  return (
    <div className="phone:w-3/4 tablet:w-2/4 mx-4 relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-slate-200 rounded-md px-4 py-1 outline-blue-400"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {foundBeer.length > 0 && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full">
          <div className="bg-slate-400 p-2 space-y-1 rounded-md">
            {foundBeer.map(({ name, id }) => (
              <div key={id} onClick={() => goToBeer(name)}>
                {name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Search

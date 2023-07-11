import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppSelector } from 'hooks/redux'
import { BsShop, BsCart3 } from 'react-icons/bs'
import Search from 'components/Search'

interface Props {
  children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate()
  const bucket = useAppSelector(state => state.appSlice.bucket)
  const goToMarket = () => navigate('/market')

  return (
    <>
      <div className="flex justify-between items-center px-4 tablet:px-6 py-2 border-b">
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={goToMarket}
        >
          <img src="./logo.png" className="w-14" alt="logotype" />
          <div className="hidden tablet:block text-xl tracking-wider font-semibold">
            Beer-Shop
          </div>
        </div>

        <Search />

        <div className="text-3xl flex items-center space-x-4">
          <NavLink to="/bucket" className="relative">
            {!!bucket.length && (
              <div className="absolute -right-3 -top-3">
                <div className="text-sm text-white bg-orange-400 rounded-full leading-none px-2 py-1">
                  {bucket.length}
                </div>
              </div>
            )}
            <BsCart3 />
          </NavLink>

          <NavLink to="/market">
            <BsShop />
          </NavLink>
        </div>
      </div>

      {children}
    </>
  )
}

export default Sidebar

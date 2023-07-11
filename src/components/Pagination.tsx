import React from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { appSlice } from 'store/reducers/appSlice'

const Pagination: React.FC = () => {
  const currentPage = useAppSelector(state => state.appSlice.currentPage)
  const dispatch = useAppDispatch()
  const { setCurrentPage } = appSlice.actions
  const pages = Array.from({ length: 11 }, (_, index) => index + 1)

  const handlePageClick = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  return (
    <div className="flex phone:p-3 tablet:justify-center">
      <div className="flex tablet:w-1/2 phone:w-full space-x-2">
        {pages.map(page => (
          <div
            key={page}
            className={`cursor-pointer flex-1 text-center rounded-md font-bold ${currentPage === page ? 'bg-slate-500 text-white' : ''}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pagination

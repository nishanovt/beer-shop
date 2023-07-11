import React from 'react'

interface Props {
  children: React.ReactNode
}

const Grid: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid gap-2 py-2 phone:px-1 tablet:px-2 laptop:px-4 phone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5">
      {children}
    </div>
  )
}

export default Grid

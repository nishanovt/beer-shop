import React from 'react'
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      className="h-[296px] tablet:h-[316px] laptop:h-[312px] relative"
      backgroundColor="#929292"
      foregroundColor="#e4e4e4"
      opacity="0.2"
      {...props}
    >
      <rect x="0" y="0" rx="6" ry="6" width="100%" height="100%" />
    </ContentLoader>
  )
}

export default Skeleton

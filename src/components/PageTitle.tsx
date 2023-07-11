import React from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'

interface PageTitleProps {
  title: string
  path: string
  withBack?: boolean
  onBack?: () => void
  BackContent?: React.ComponentType<React.ComponentProps<typeof BsArrowLeftCircle>>
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  path,
  BackContent = BsArrowLeftCircle,
  onBack,
  withBack,
}) => {
  return (
    <div className="flex items-center justify-between border-b phone:mx-5 laptop:mx-10 mt-3 px-4 py-2">
      <div className="flex items-center text-xl space-x-3">
        {withBack && (
          <BackContent className="text-3xl cursor-pointer" onClick={onBack} />
        )}
        <div>{title}</div>
        <div className="text-sm text-slate-400">{path}</div>
      </div>
    </div>
  )
}

export default PageTitle

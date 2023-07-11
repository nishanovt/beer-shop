import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { GoodTypes } from 'types/good'
import Card from './Card'

interface Props {
  goods: GoodTypes.Card[]
}

const Slider = ({ goods }: Props) => {
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(2)
      } else if (window.innerWidth < 1280) {
        setSlidesPerView(3)
      } else {
        setSlidesPerView(4)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const sliderSettings = {
    slidesPerView,
    spaceBetween: 20,
    pagination: true
  }

  return (
    <div>
      <div className="text-sm text-slate-500">Листай дальше для просмотра</div>
      <Swiper className="mySwiper" {...sliderSettings}>
        {goods.map((good) => (
          <SwiperSlide key={good.id}>
            <Card good={good} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider

import React from 'react'
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PrevArrow =({onClick})=>(
<button onClick={onClick} className='prevArrow'>
    <FaChevronLeft size={14} />
</button>
)

const NextArrow =({onClick})=>(
<button onClick={onClick} className='nextArrow'>
    <FaChevronRight size={14} />
</button>
)
const TopBannerSlider = () => {
    const settings={
       dots: false,
       infinite: true,
       speed: 500,
       autoplay: true,
       autoplaySpeed: 3000,
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: true,
       nextArrow: <NextArrow/>,
       prevArrow: <PrevArrow/>
    }

   const banners = [
    "🎉 50% OFF on New Launch!",
    "🚚 Free Delivery on orders above ₹499",
    "🔥 Today Only: Buy 1 Get 1 Free on Clothing",
    "💳 Get 10% cashback with HDFC Cards",
   ]


  return (
    <div>
        <Slider{...settings}>
           {banners.map((text, index) =>(
            <div key={index} >
               <p className='bannerView'>{text}</p>
            </div>
           ))}
        </Slider>
    </div>
  )
}

export default TopBannerSlider



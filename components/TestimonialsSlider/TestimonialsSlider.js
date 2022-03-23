import React from 'react'
import TestimonialsBox from '../TestimonialsBox/TestimonialsBox'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialsData from '../../StaticData/TestimonialsData/TestimonialsData';
const TestimonialsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <Slider {...settings} >
    
       {
         TestimonialsData.map((val,index)=> 
         <TestimonialsBox name={val.name} position={val.position} imgUrl={val.img} feedback={val.feedback} key={index} title={val.title}/>)
       }
   
    
    </Slider>
    </>
  )
}

export default TestimonialsSlider

// <Stack
//         direction={{ base: "column", md: "row" }}
//         spacing={{ base: 10, md: 4, lg: 10 }}
//       > */}
//       {/* </Stack>
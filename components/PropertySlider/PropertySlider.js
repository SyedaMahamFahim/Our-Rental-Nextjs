import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropertyBox from '../PropertyBox/PropertyBox'
import { baseUrl, fetchApi } from '../../utils/fetchApi';

const PropertySlider = ({ propertiesForRent }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
      console.log(propertiesForRent )
  return (
    <>
    <Slider {...settings}>
    {/* {propertiesForRent.map((property) => <PropertyBox property={property} key={property.id} />)} */}


    </Slider>
    </>
  )
}

export default PropertySlider


export async function getStaticProps() {
  
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`);

  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
    },
  };
}


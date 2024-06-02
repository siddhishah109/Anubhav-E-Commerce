import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
import b1 from '../assest/banner/b1.jpg'
const Home = () => {
  return (
    <div>
       <div className='w-full h-full min-w-full min-h-full transition-all'>
        <image src={b1} className='b1'/>
      </div>
      <CategoryList/>
     
      <BannerProduct/>
      <HorizontalCardProduct category={"Sneakers"} heading={"Sneakers"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>
      {/* <VerticalCardProduct category={"WesternWear"} heading={"WesternWear"}/>
      <VerticalCardProduct category={"Jewellery"} heading={"Jewellery"}/> */}
      <VerticalCardProduct category={"Accessories"} heading={"Accessories"}/>
      <VerticalCardProduct category={"Ethnic"} heading={"Ethnic"}/>
      <VerticalCardProduct category={"Tops&Tunics"} heading={"Tops&Tunics"}/>
      <VerticalCardProduct category={"Dresses"} heading={"Dresses"}/>
      <VerticalCardProduct category={"Jeans&Jeggings"} heading={"Jeans&Jeggings"}/>
      <VerticalCardProduct category={"Bags"} heading={"Bags"}/>
    </div>
  )
}

export default Home
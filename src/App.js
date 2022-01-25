import logo from './logo.svg';
import "swiper/css";
import "swiper/css/pagination"
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
import SwiperCore, {
  Pagination
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Header from './components/Header';
import Meme from './components/Meme';

SwiperCore.use([Pagination]);

function App() {
  const newData = data.map(item => {
    return <SwiperSlide><Card key={item.id} img={item.coverImg} rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price}></Card></SwiperSlide>
  })
  return (
  <div>
    <Header></Header>
    <Meme></Meme>
   {/*  <Navbar></Navbar>
   
    <section className='cards__list'>
    <Swiper slidesPerView={4} spaceBetween={10} pagination={{
  "clickable": true
}} className="mySwiper">
   
    {
      
     newData
    
    }
    
    </Swiper>
    </section>
    
<Hero></Hero>  */}
    </div>
  );
}

export default App;

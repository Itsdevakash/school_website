import Navbar from './Navbar'
import Footer from './Footer'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
const Home=()=>{


    return(
        <div>
         <Navbar />
       <header className='grid md:grid-cols-2 md:p-24  xl:place-content-center  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%   animate__animated animate__fadeIn '>

        <div>
       <img 
       className='h-full animate__animated animate__pulse rounded-full w-4/5'
       src='./image/school.png' 
       alt='./image/school.png'
       />

        </div>

        <div className='flex flex-col gap-5 place-content-center '>
            <h1 className='text-6xl text-white font-bold'>Say Hello !</h1>
        <p className='text-2xl font-semibold'> Enjoy complete digital learning experirnce With Code School By Akash</p>
        <div className='flex gap-6'>
          <button className='bg-[#100d22] text-white px-12 py-4 rounded-md text-lg hover:bg-orange-600'>Learn More</button>  
          <button className=' text-[#100d22] px-12 py-4 rounded-md text-lg border border-5 border-[#100d22]  font-semibold'>Watch video</button>  
        </div>

        </div>

       </header>

       <div className='p-24'>
        <h1 className='text-center text-4xl font-bold'>Benifits & Advantages</h1>
        <p className='text-gray text-center mt-4 text-lg'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum incidunt adipisci nulla, provident tempore a minus autem voluptates optio! Perspiciatis hic sit quis. Fugiat commodi ea fugit aliquam natus.</p>
      
      
        <div className='w-11/12  mx-auto mt-12 grid grid-cols-3 gap-5'>
        <div className=' shadow-lg border rounded-md p-4 text-center'> 
        <i className="ri-clipboard-line text-6xl"></i>
          <h1 className='text-2xl font-semibold mb-2'>   Great Faculty</h1>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
       

        <div className=' shadow-lg border rounded-md p-4 text-center'> 
        <i className="ri-bank-card-line text-6xl"></i>
          <h1 className='text-2xl font-semibold mb-2'>Latest Curriculum</h1>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
       


        <div className=' shadow-lg border rounded-md p-4 text-center'> 
        <i className="ri-tree-line text-6xl"></i>
          <h1 className='text-2xl font-semibold mb-2'>Green Enviroment</h1>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
       
        
        </div>      
        
       </div>

       <div className='p-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <h1 className='text-center text-4xl font-bold'>Campus Portofolio</h1>
        <p className='text-white text-center mt-4 text-lg'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum incidunt adipisci nulla, provident tempore a minus autem voluptates optio! Perspiciatis hic sit quis. Fugiat commodi ea fugit aliquam natus.</p>
      <div className='my-15'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src='./image/bg1.jpg'  className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./image/bg2.jpg'  className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./image/bg3.jpg'  className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./image/bg4.jpg'  className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./image/bg5.jpg'  className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./image/bg6.jpg'  className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./image/bg7.jpg'  className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./image/bg8.jpg'  className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./image/bg9.jpg' className='w-full' /></SwiperSlide>
      </Swiper>
      </div>

      <h1 className='text-center text-2xl font-bold'> © {(new Date().getFullYear())} All Rights Reserved by Code School | Developed by AKASH MAURYA</h1>
      </div>

    
        <Footer />
        </div>
    )
}
export default Home   
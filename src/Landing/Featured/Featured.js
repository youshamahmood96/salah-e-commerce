import '../Landing.css'
import fakeData from '../../Assets/fakeData'
import shuffle from '../shuffle'
import Slider from 'react-slick'
const featuredProducts = shuffle(fakeData.slice(0,15))
const Featured = () => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
  return(
      <>
      <h1 className="margin text-center" >Featured Products</h1>
      <Slider {...settings}>
            {featuredProducts.map(item=>(
                <div key={item.key} >
                  <img src={item.img} alt=""/>
                  <p style={{marginTop:'20px'}} >{item.category}</p>
                  <small>$ {item.price} </small>
                </div>
            ))}
        </Slider>
      </>
      
  )
}
export default Featured;
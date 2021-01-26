import ProductCarousel from "./ProductCarousel"
import '../Landing.css'
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
const Hero =() =>{
    return(
        <>
          <h1 className="text-center margin" >All your Necessities, just one click away.</h1>
          <ProductCarousel></ProductCarousel>
          <div className="d-flex justify-content-center margin">
          <Link to='/shop' ><Button variant="outline-success">Shop Now</Button></Link>
          </div>
        </>
    )
}
export default Hero
import About from "./About/About"
import Featured from "./Featured/Featured"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import LandingShop from "./LandingShop/LandingShop"
import NewsLetter from "./NewsLetter/NewsLetter"

const Landing =() =>{
    return(
        <>
          <Hero></Hero>
          <Featured></Featured>
          <NewsLetter></NewsLetter>
          <LandingShop></LandingShop>
          <About id="about"></About>
          <Footer></Footer>
        </>
    )
}
export default Landing
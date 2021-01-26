import { Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
import '../Landing.css'
const Footer = () =>{
    return(
        <footer>
          <Container>
            <Row>
              <Col className="main-div" md={4}>
              <div className="sub-div">
              <hr/> 
                <address>
                6th Floor, Elegant Shopping Mall, Sylhet 3100
                </address>  
              </div>
              </Col>
              <Col md={2}>
                <h4>Main Menu</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <Link to='/shop'><li>Shop</li></Link>
                    <li>Help</li>
                </ul>
              </Col>
              <Col md={2}>
                <h4>Company</h4>
                <ul>
                    <li>The Company</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
              </Col>
              <Col md={2}>
                <h4>Discover</h4>
                <ul>
                    <li>The Team</li>
                    <li>Our History</li>
                    <li>Brand Motto</li>
                </ul>
              </Col>
              <Col md={2}>
                <h4>Find Us On</h4> 
                <ul>
                    <li><a href="https://www.facebook.com/SalahSoftwareSolution">Facebook</a> </li>
                    <li> <a href="https://twitter.com/SalahSoftware">Twitter</a> </li>
                    <li> <a href="https://www.instagram.com/explore/locations/370190536401634/salah-software/?hl=en">Instagram</a> </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
    )
}
export default Footer
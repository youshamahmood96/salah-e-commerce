import {useSelector } from "react-redux";
import CartItems from "./CartItems";
import '../Landing/Landing.css'
import { Col, Container, Row } from "react-bootstrap";
const Cart = () =>{
    const basket = useSelector(state=>state?state:null)
    return(
        <div>
        <h1 className="margin text-center">Shopping Cart</h1>
        <Container>
          <Row>
            <Col md={7}>
            <h3>Your Cart</h3>
            <hr/> 
            {
                basket?.basket?.map(item=><CartItems key={item.key} item={item}></CartItems>)
            }
            </Col>
            <Col md={5}>
              <h3>Summary</h3>
              <hr/> 
              <h4 style={{fontWeight: 'bolder'}} >ENTER COUPON CODE</h4>
              <hr/> 
              <h4>SUBTOTAL<span> : $ {basket?.total}</span></h4>
              <h4>SHIPPING<span> : $ 0</span></h4>
              <h4>TAXES<span> : $ 13</span></h4>
              <hr/> 
              <p>TOTAL<span> : $ {basket.total?parseInt(basket.total)+13: null}</span></p>
            </Col>
          </Row>
        </Container>
        </div>
    )
}
export default Cart
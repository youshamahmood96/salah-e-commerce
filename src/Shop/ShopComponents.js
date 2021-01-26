import { Button } from "react-bootstrap"
import { Container,Row,Col } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions/actions";
import '../Landing/Landing.css'
const ShopComponents = (props) =>{
  const {name,category,price,img} = props.item
  const dispatch = useDispatch();
  return(
      <Container className="margin" >
        <Row>
          <Col md={5}>
            <img src={img} alt=""/>
          </Col>
          <Col md={7}>
          <h2>{name}</h2>
          <p>{category}</p>
          <p> $ {price}</p>
          <Button onClick={()=>dispatch( addToBasket(props.item))} variant="outline-success">Add to Cart</Button> 
          </Col>
        </Row>
      </Container>
  )
}
export default ShopComponents
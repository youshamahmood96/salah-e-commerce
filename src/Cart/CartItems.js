import { Col, Container, Row } from "react-bootstrap"
import { useDispatch} from "react-redux";
import { changeQuantity } from "../redux/actions/actions";

const CartItems = (props) =>{
    const {img,price,name,category,quantity} = props.item
    const dispatch = useDispatch();
    const handleChange = (e) =>{
        props.item.quantity = e.target.value
        dispatch( changeQuantity(props.item))
    }
  return(
      <Container>
        <Row>
          <Col md={5} >
            <img src={img} alt=""/>
          </Col>
          <Col md={7} >
            <p>{name}</p>
            <p>{category}</p>
            <p> $ {price}</p>
            <input onChange={e=>handleChange(e)} type="number" min="0" defaultValue={quantity} id=""/>
          </Col>
        </Row>
      </Container>
  )
}
export default CartItems
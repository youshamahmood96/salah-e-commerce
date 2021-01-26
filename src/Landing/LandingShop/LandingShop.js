import { Button, Col, Container, Row } from "react-bootstrap";
import fakeData from '../../Assets/fakeData'
import shuffle from "../shuffle";
import '../Landing.css'
import { addToBasket } from "../../redux/actions/actions";
import { useDispatch} from 'react-redux';


const LandingShop = () => {
  const shopProducts = shuffle(fakeData.slice(16,22))
  const dispatch = useDispatch();
    return(
        <Container>
          <Row>
            <Col md={12}>
              {
                  shopProducts.map(item=>(
                      <div className="landing-shop" key={item.key} >
                        <img src={item.img} alt=""/>
                        <p>{item.category}</p>
                        <small> $ {item.price}</small>
                        <br/>
                        <Button onClick={()=>dispatch( addToBasket(item))} variant="outline-success">Add to Cart</Button>
                      </div>
                      ))
              }
            </Col>
          </Row>
        </Container>
    )
}
export default LandingShop;
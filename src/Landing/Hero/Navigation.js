import { Nav, Navbar,Form,FormControl,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation =() =>{
    return(
        <>
        <Navbar bg="transparent" expand="lg">
          <Link to='/' ><Navbar.Brand className="ml-4">Salah-Commerce</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
            <FormControl type="text" placeholder="Search" className="ml-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="ml-auto mr-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Link to='/about'><Nav.Link href="#about">About</Nav.Link></Link>
            <Link to='/shop'><Nav.Link href="#link">Shop</Nav.Link></Link>
            <Nav.Link href="#help">Help</Nav.Link>
            <Link to='/cart'><Button variant="outline-success">Your Cart</Button></Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}
export default Navigation
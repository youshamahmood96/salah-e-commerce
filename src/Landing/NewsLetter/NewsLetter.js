import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap"

const NewsLetter = () => {
    return (
        <Container className="margin" >
            <Row>
                <Col md={6} >
                  <h1>NewsLetter</h1>
                  <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod hic, expedita voluptas molestias doloribus fuga dolore, debitis dolor ducimus ut ea tenetur nobis fugit soluta maxime veniam pariatur placeat qui? </p>
                </Col>
                <Col md={6}  >
                    <Form inline>
                    <FormControl style={{width:'350px'}} type="text" placeholder="Email Address" className="ml-sm-4" />
                    <Button style={{margin:'20px'}} variant="outline-success">Subscribe</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default NewsLetter
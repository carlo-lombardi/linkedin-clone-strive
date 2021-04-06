import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

class Header extends React.Component {
    render() {
        return (
            <Container>
            <Container className="header col-9 ml-0">
                <Row>
                    <Image src="https://via.placeholder.com/830x195">
                    </Image>
                </Row>
                <Row className="justify-content-end">
                    <Button className="mr-3" variant="primary">Connect</Button>
                    <Button className="mr-3" variant="outline-secondary">Message</Button>
                    <Button className="mr-3" variant="light">...</Button>
                </Row>
                <Row>
                    <Col className="flex-column">
                        <span>Sichao. Edrea Li</span>
                        <span>ISP Channel Manager</span>
                        <span></span>
                    </Col>
                    <Col>STUFF</Col>
                </Row>
            </Container>
            </Container>
        )
    }
}

export default Header
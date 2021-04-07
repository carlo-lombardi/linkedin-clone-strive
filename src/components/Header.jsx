import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

class Header extends React.Component {
    render() {
        return (
            <Container>
            <Container className="header col-9 ml-0 my-2">
                <Row>
                    <Image src="https://via.placeholder.com/830x195">
                    </Image>
                </Row>
                <Row className="justify-content-end mb-5">
                    <Image className="profile" src="https://via.placeholder.com/200x200">
                    </Image>
                    <Button className="headerButton mr-3 my-3" variant="primary">Connect</Button>
                    <Button className="headerButton mr-3 my-3" variant="outline-secondary">Message</Button>
                    <Button className="headerButton mr-3 my-3" variant="light">...</Button>
                </Row>
                <Row>
                    <Col className="flex-column">
                        <p>Sichao. Edrea Li</p>
                        <p>ISP Channel Manager - Huawei Technology</p>
                        <p>Stockholm County, Sweden</p>
                    </Col>
                    <Col className="flex-column">
                        <p>Huawei</p>
                        <p>KTH Royal Institute</p>
                    </Col>
                </Row>
            </Container>
            </Container>
        )
    }
}

export default Header
import React, { Component } from 'react'
import { Jumbotron, Container, Card, CardImg,
    CardTitle, Row, Col, CardBody,
    CardSubtitle, CardText } from 'reactstrap';

class Home extends Component {

    render() {
        console.log('THESE are the props', this.props)
        const event = this.props.events.events.map(event => {
            return(
                <Card key={event.id}>
                    <Row>
                        <Col><CardImg src={event.image} /></Col>
                        <Col>
                            <CardBody>
                                <CardTitle><b>Name of Event:</b> {event.name}</CardTitle>
                                <CardSubtitle><b>Date:</b> {event.date}</CardSubtitle>
                                <CardText><b>Family:</b> {event.family}</CardText>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>                
            );
        });
        return (
            <React.Fragment>
               <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Xmas Break</h1>
                                <h2>The best time of the year</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Container className="body-container">
                    <div className="col">
                        {event}
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}


export default Home
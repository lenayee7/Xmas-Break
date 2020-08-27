import React, { Component } from 'react'
import { Jumbotron, Container, Card, CardImg, 
    CardImgOverlay, CardTitle } from 'reactstrap';



class Home extends Component {

    render() {
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
                <Container>
                    <Card>
                        <CardImg id="fishie-img" src="./assets/images/baby-fishie.jpg" />
                        <CardImgOverlay>
                            <CardTitle>Hey</CardTitle>
                        </CardImgOverlay>
                    </Card>                
                </Container>
            </React.Fragment>
        )
    }
}


export default Home
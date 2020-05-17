import React, { Component,show,handleShow,handleClose,useState } from 'react';
import { Card,Button,ListGroup,ListGroupItem,Modal,CardDeck } from "react-bootstrap"
import {
    Grid,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'
import '../App.css';

export default class AboutUs extends Component {
      
    render() {
        
        return (

        <div id="parent">
            <div class="about-section">
            <h1>About Us</h1>
            <p>Meet the creators of BallersOnly.</p>
            </div>

            <CardDeck>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Kobe_Bryant_2015.jpg" className="aboutImage"/>
                <Card.Body>
                    <Card.Title>Alton Dulinen</Card.Title>
                    <Card.Text>
                    Third Year Computer Science, Ryerson University
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </Card>
            

            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F04%2F10%2Flebron-james.jpg" className="aboutImage"/>
                <Card.Body>
                    <Card.Title>Mico Cataga</Card.Title>
                    <Card.Text>
                    Third Year Computer Science, Ryerson University
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </Card>
            

           
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cfe8aa234a5c4000847f74f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D2370%26cropY1%3D102%26cropY2%3D2474" className="aboutImage"/>
                <Card.Body>
                    <Card.Title>Manveer Gill</Card.Title>
                    <Card.Text>
                    Third Year Computer Science, Ryerson University
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </Card>
            

            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.biography.com/.image/t_share/MTY2Njc5NDYzOTQ4NDYxNDA4/michael-jordan.jpg" className="aboutImage"/>
                <Card.Body>
                    <Card.Title>Musab Jaseem</Card.Title>
                    <Card.Text>
                    Third Year Computer Science, Ryerson University
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </Card>
            

            </CardDeck>

        </div>

        
        )
    }
}

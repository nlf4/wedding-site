import React from 'react';
import {Card, CardText, CardBody, CardTitle } from 'reactstrap';

const Details = () => {
  return (
    <div className="details">
        <Card className="ceremony-details">
            <CardBody>
                <div class="body-text">
                <CardTitle>Our Wedding</CardTitle>
                <CardText id="detail-label">Date:</CardText>
                <CardText>Sunday, May 15, 2022</CardText>
                <CardText id="detail-title">Ceremony</CardText>
                <CardText id="detail-label">Time:</CardText>
                <CardText>4:00pm</CardText>
                <CardText id="detail-title">Reception</CardText>
                <CardText id="detail-label">Time:</CardText>
                <CardText>6:00pm</CardText>
                <CardText id="detail-label">Location:</CardText>
                <CardText>Westerville, Ohio</CardText>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default Details

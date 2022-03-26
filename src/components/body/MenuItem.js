import React from "react";
import { Card, CardImg , CardImgOverlay, CardBody , CardTitle } from "reactstrap";


const MenuItem = props => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardImg width="100%" 
                    alt={props.dish.name} 
                    src={props.dish.image} 
                    style={{ opacity: "0.9" }}/>
                    <CardImgOverlay>
                        <CardTitle>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;
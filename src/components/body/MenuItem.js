import React from "react";
import { Card, CardImg , CardImgOverlay, CardBody , CardTitle } from "reactstrap";


const MenuItem = props => {
    console.log(props);
    return (
        <div>
            <card>
                <CardBody>
                    <CardImg width="100%" alt={props.name} src={props.img}/>
                    <CardImgOverlay>
                        <CardTitle>{props.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </card>
        </div>
    );
}

export default MenuItem;
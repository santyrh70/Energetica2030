import React from 'react'
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faCheck } from "@fortawesome/free-solid-svg-icons"

import "./LeftMenu.scss"

export default function LeftMenu() {


    return (
        <div className="left-menu">
            <Item className="item" name="mapa" icon={faMap}></Item>
            <Item className="item" name="formulario" icon={faCheck}></Item>
        </div>
    )
}

function Item(props) {
    const { name, icon } = props;
    var route = ""

    if ( name!=="mapa" ) {
        route = name
    }
    
    return (
        <Link to={"/" + route}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon> 
            {name} 
        </Link>
    );
}

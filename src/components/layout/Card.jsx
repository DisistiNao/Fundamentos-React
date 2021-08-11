import "./Card.css";
import React from "react";

export default (props) => {
    const cardColors = {
        backgroundColor: props.color || "red",
        borderColor: props.color || "red"
    }

    return (
        <div className="card" style={cardColors}>
            <div className="title">{ props.titulo }</div>
            <div className="content">{ props.children }</div>
        </div>
    );
};
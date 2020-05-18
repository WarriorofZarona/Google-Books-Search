import React from "react";
import Container from "./Container";

function SavedWrapper(props) {

    return (
        <Container>
            <div className="jumbotron border border-dark p-2">
                <strong>Saved Books</strong>
                <br />
                {props.children}
            </div>
        </Container>
    )
};

export default SavedWrapper;
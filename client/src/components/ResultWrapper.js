import React from "react";
import Container from "./Container";

function ResultWrapper(props) {

    return (
        <Container>
            <div className="jumbotron border border-dark p-2">
                <strong>Book Results</strong>
                <br />
                {props.children}
            </div>
        </Container>
    )
};

export default ResultWrapper;
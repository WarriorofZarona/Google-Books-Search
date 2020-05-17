import React from "react";
import Container from "./Container";

function Header() {
    return (
        <Container>
            <div className="jumbotron text-center border border-dark" >
                <h1 className="display-4">(React) Google Books Search</h1>
                <p className="lead">Search for and Save books of interest</p>
            </div>
        </Container>
    )
};

export default Header;
import React from "react";
import Container from "./Container";

function BookSearch() {

    return (
        <Container>
            <div className="jumbotron border border-dark p-2">
                Book Search
            <form className="search" >
                    <div className="form-group text-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your search"
                            id="book"
                        />
                    </div>
                </form >
            </div>
        </Container>
    )

};

export default BookSearch;
import React from "react";
import Container from "./Container";

function BookResults(props) {

    return (
        <li className="list-group-item border border-dark p-2 m-2 p-1">
            <Container>
                <div className="row">
                    <div className="col-6">
                        <h4>{props.title}</h4>
                        {props.authors === [] ? <p>No authors</p> :
                            <p> Written by                                       {props.authors.map((author, index, arr) => (index === arr.length - 1 ? author : author + ", "))}
                            </p>}
                    </div>
                    <div className="col-6 text-right">
                        <a href={props.link}><button className="btn btn-info m-1" type="button">View</button></a>
                        <button className="btn btn-info m-1" type="button">Save</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="col-10">
                        {props.description}
                    </div>
                </div>

            </Container>
        </li >
    )
};

export default BookResults;
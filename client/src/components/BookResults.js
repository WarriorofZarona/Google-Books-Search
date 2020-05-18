import React from "react";
import Container from "./Container";

function BookResults(props) {

    return (

        // <div class="card w-75">
        //     <div class="card-body">
        //         <h5 class="card-title">Card title</h5>
        //         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //         <a href="#" class="btn btn-primary">Button</a>
        //     </div>
        // </div>

        // <div class="card w-50">
        //     <div class="card-body">
        //         <h5 class="card-title">Card title</h5>
        //         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //         <a href="#" class="btn btn-primary">Button</a>
        //     </div>
        // </div>

        <div className="card w-100 border border-dark p-2 m-2 p-1">
            <div className="card-body">
                <h5 className="card-title">
                    {props.title}
                </h5>
                <div className="card-title">
                    Written by {props.authors.map((author, index, arr) => (
                    (index === arr.length - 1 ? author : author + ", ")
                ))}
                </div>
                <img src={props.image} alt={props.title} />
                {props.description}
            </div>
        </div>

    )
};

export default BookResults;
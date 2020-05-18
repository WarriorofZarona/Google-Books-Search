import React, { useState, useEffect } from "react";
import BookSearch from "../../components/BookSearch";
import ResultWrapper from "../../components/ResultWrapper";
import BookResults from "../../components/BookResults";
import { List } from "../../components/List";
import API from "../../utils/API";


function Search() {

    const [books, setBooks] = useState({ results: [] });
    const [userQuery, setUserQuery] = useState("");
    const [saveBooks, setSaveBooks] = useState({
        title: "",
        authors: [],
        description: "",
        image: "",
        link: ""
    })

    useEffect(() => searchBooks("Coding"), []);

    function handleInputChange(event) {
        const { value } = event.target;
        setUserQuery(value);
    };

    function searchBooks(query) {
        API.getBooks(query)
            .then(res => {
                setBooks({ results: res.data.items })
            })
            .catch(err => console.log(err));
    };

    function handleSubmit(event) {
        event.preventDefault();
        searchBooks(userQuery);
    };

    return (
        <div>
            <BookSearch inputChange={handleInputChange} handler={handleSubmit} />
            <ResultWrapper>
                <List>
                    {books ?
                        books.results.map(result => (
                            <BookResults
                                title={result.volumeInfo.title}
                                authors={result.volumeInfo.authors}
                                description={result.volumeInfo.description}
                                image={result.volumeInfo.imageLinks.thumbnail}
                                link={result.volumeInfo.infoLink}
                            />
                        ))
                        : <h3 className="text-center">No results to show!</h3>}
                </List>
            </ResultWrapper>
        </div>
    )
};


export default Search;
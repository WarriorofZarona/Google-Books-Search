import React, { useState, useEffect } from "react";
import BookSearch from "../../components/BookSearch";
import ResultWrapper from "../../components/ResultWrapper";
import BookResults from "../../components/BookResults";
import { List } from "../../components/List";
import API from "../../utils/API";


function Search() {

    const [books, setBooks] = useState({ results: [] });
    const [userQuery, setUserQuery] = useState("");

    useEffect(() => searchBooks("Coding"), []);

    function handleInputChange(event) {
        const { value } = event.target;
        setUserQuery(value);
    };

    function searchBooks(query) {
        API.getBooks(query)
            .then(res => {
                if (res.data === undefined) {
                    setBooks({ results: [] });
                } else {
                    setBooks({ results: res.data.items })
                }
            })
            .catch(err => console.log(err));
    };

    function handleSearchSubmit(event) {
        event.preventDefault();
        searchBooks(userQuery);
    };


    return (
        <div>
            <BookSearch inputChange={handleInputChange} handler={handleSearchSubmit} />
            <ResultWrapper>
                {books.results.length ?
                    <List>
                        {books.results.map(result => (
                            <BookResults
                                key={result.id}
                                title={result.volumeInfo.title}
                                authors={result.volumeInfo.authors === undefined ? [] : result.volumeInfo.authors}
                                description={result.volumeInfo.description}
                                image={result.volumeInfo.imageLinks.thumbnail}
                                link={result.volumeInfo.infoLink}
                            />))}
                    </List> : (<h1>No results to show!</h1>)
                }
            </ResultWrapper>
        </div>
    )
};


export default Search;
import React, { useState, useEffect } from "react";
import BookSearch from "../../components/BookSearch";
import ResultWrapper from "../../components/ResultWrapper";
import BookResults from "../../components/BookResults";
import { List } from "../../components/List";
import API from "../../utils/API";


function Search() {

    const [books, setBooks] = useState({ results: [] });

    useEffect(() => searchBooks("Twilight"), []);

    function searchBooks(query) {
        API.getBooks(query)
            .then(res => {
                setBooks({ results: res.data.items })
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <BookSearch handler={searchBooks} />
            <ResultWrapper>
                <List>
                    {books.results.map(result => (
                        <BookResults
                            title={result.volumeInfo.title}
                            authors={result.volumeInfo.authors}
                            description={result.volumeInfo.description}
                            image={result.volumeInfo.imageLinks.thumbnail}
                            link={result.volumeInfo.infoLink}
                        />
                    ))}
                </List>
            </ResultWrapper>
        </div>
    )
};


export default Search;
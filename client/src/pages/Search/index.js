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
        const { name, value, id } = event.target;
        console.log(id);
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
            .then(console.log(books))
            .catch(err => console.log(err));
    };

    function handleSearchSubmit(event) {
        event.preventDefault();
        searchBooks(userQuery);
    };

    function handleBookSave(event) {
        event.preventDefault();
        //Trying to use the save button here to save the data of the list to the database,
        //Pondering about how to target the data properly

    }

    return (
        <div>
            <BookSearch inputChange={handleInputChange} handler={handleSearchSubmit} />
            <ResultWrapper>
                <List>
                    {books.results.map(result => (
                        <BookResults
                            key={result.id}
                            title={result.volumeInfo.title}
                            authors={result.volumeInfo.authors === undefined ? [] : result.volumeInfo.authors}
                            description={result.volumeInfo.description}
                            image={result.volumeInfo.imageLinks.thumbnail}
                            link={result.volumeInfo.infoLink}
                            handler={handleBookSave}
                        />))}
                </List>
            </ResultWrapper>
        </div>
    )
};


export default Search;
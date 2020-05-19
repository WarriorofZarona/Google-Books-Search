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
        const { name, value } = event.target;

        //conditional statement for input change?
        // if () {
        setUserQuery(value);
        // } else {
        // setSaveBooks({ ...props, [name]: value })
        // }
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

    // function saveBook()

    function handleSubmit(event) {
        event.preventDefault();
        searchBooks(userQuery);
    };

    return (
        <div>
            <BookSearch inputChange={handleInputChange} handler={handleSubmit} />
            <ResultWrapper>
                <List>
                    {
                        books.results.map(result => (
                            <BookResults
                                title={result.volumeInfo.title}
                                authors={result.volumeInfo.authors === undefined ? [] : result.volumeInfo.authors}
                                description={result.volumeInfo.description}
                                image={result.volumeInfo.imageLinks.thumbnail}
                                link={result.volumeInfo.infoLink}
                            />))}
                        )
                </List>
            </ResultWrapper>
        </div>
    )
};


export default Search;
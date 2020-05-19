import React, { useState, useEffect } from "react";
import SavedWrapper from "../../components/SavedWrapper";
import SavedBooks from "../../components/SavedBooks";
import API from "../../utils/API";
import { List } from "../../components/List";

function Saved() {

    const [savedBooks, setSavedBooks] = useState([])

    useEffect(() => loadSavedBooks(),
        []);


    function deleteBook(event) {
        event.preventDefault();
        const { id } = event.target;
        API.deleteBook(id)
            .then(res => loadSavedBooks())
            .catch(err => console.log(err));
    }

    function loadSavedBooks() {
        API.getSavedBooks()
            .then(res => {
                if (res.data === undefined) {
                    setSavedBooks([]);
                } else {
                    setSavedBooks(res.data)
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <SavedWrapper>
            <List>
                {savedBooks.map(result => (
                    <SavedBooks
                        key={result._id}
                        id={result._id}
                        title={result.title}
                        authors={result.authors === undefined ? [] : result.authors}
                        description={result.description}
                        image={result.image}
                        link={result.link}
                        deleteBook={deleteBook}
                    />))}
            </List>
        </SavedWrapper >
    )
};

export default Saved;
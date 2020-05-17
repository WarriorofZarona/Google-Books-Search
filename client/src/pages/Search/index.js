import React, { useEffect } from "react";
import BookSearch from "../../components/BookSearch";
import BookResults from "../../components/BookResults";


function Search(props) {


    return (
        <div>
            <BookSearch />
            <BookResults />
        </div>
    )
};

export default Search;
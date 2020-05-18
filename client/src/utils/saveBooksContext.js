import React from "react";

const saveBooksContext = React.createContext({
    title: "",
    authors: [],
    description: "",
    image: "",
    link: ""
});

export default saveBooksContext;

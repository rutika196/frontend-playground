import React from "react";

export default function Quote ({text, author}) {

    return(
        <blockquote>
            <p>'{text}'</p>
            <footer> - {author}</footer>
        </blockquote>

    )
}
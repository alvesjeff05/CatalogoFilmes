import React from "react";
import './Header.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="logo">
                <a href="/">
                    <img src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png' alt="netflix"/>
                </a>
            </div>
            <div className="usuario">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="usuario"/>
                </a>
            </div>
        </header>
    )
}
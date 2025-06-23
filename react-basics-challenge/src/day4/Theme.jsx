import React, { useState } from 'react';

const Theme = () => {
    const [theme, setTheme] = useState('light');

    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return(
        <div>
            <button type="button" onClick={handleTheme}></button>
            <p>Current mode: {theme}</p>
        </div>
    );
};

export default Theme;
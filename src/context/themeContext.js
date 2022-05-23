import React from 'react';

const ThemeContext = React.createContext(
    {
        theme: 'primary',
        changeTheme: () => { },

    }
);

export default ThemeContext;
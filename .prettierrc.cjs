'use strict';

module.exports = {
    overrides: [
        {
            files: '*.{js,jsx,ts,tsx}',
            options: {
                semi: false,
                printWidth: 120,
                tabWidth: 4,
                useTabs: false,
                singleQuote: true,
            },
        },
    ],
};

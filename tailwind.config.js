module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            main: ['Bellefair', 'serif'],
            sub: ['Barlow Condensed', 'sans-serif'],
        },
        fontSize: {
            h1: '150px',
            h1Mob: '80px',
            h2: '100px',
            h3: '56px',
            h4: '32px',
            h5: ['28px', { letterSpacing: '4.75px' }],
            h5Tab: ['20px', { letterSpacing: '3.38px' }],
            h5Mob: ['16px', { letterSpacing: '2.7px' }],
            sub1: '28px',
            sub2: ['14px', { letterSpacing: '2.35px' }],
            nav: [
                '14px',
                {
                    letterSpacing: '2.7px',
                },
            ],
            navMob: [
                '14px',
                {
                    letterSpacing: '2.7px',
                },
            ],
            body: ['18px', { lineHeight: '32px' }],
            bodyTab: ['16px', { lineHeight: '28px' }],
            bodyMob: ['15px', { lineHeight: '25px' }],
        },
        colors: {
            bk: '#0B0D17',
            pl: '#D0D6F9',
            wt: '#FFFFFF',
        },
        extend: {
            spacing: {
                96: '96px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

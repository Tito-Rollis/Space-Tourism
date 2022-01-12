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
            h1Mob: '76px',
            h2: '80px',
            h3: '56px',
            h4: '32px',
            h5: ['22px', { letterSpacing: '4.75px' }],
            h5Tab: ['20px', { letterSpacing: '3.38px' }],
            h5Mob: ['14px', { letterSpacing: '2.7px' }],
            sub1: '22px',
            sub2: ['14px', { letterSpacing: '2.35px' }],
            nav: [
                '12px',
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
            body: ['16px', { lineHeight: '28px' }],
            bodyTab: ['14px', { lineHeight: '28px' }],
            bodyMob: ['12px', { lineHeight: '25px' }],
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

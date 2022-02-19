module.exports = {
    purge: [],
    theme: {
        extend: {
            colors: {
                flesh: '#ffc4a0',
                'flesh-light': '#ffebdf',
                transparent: 'transparent',
                black: '#000',
                dark: '#333',
                white: '#fff', 
                'white-light': '#f3f3f3',
                gray: {
                    'light': '#f7f7f7'
                },
            },
            spacing: {
                30: '30px',
                15: '60px',
                50: '50px'
            },
            borderWidth: {
                1: '1px',
            },
        },

        fontSize: {
            xs: ['25px', {
                lineHeight: '1rem'
            }],
            sm: ['0.875rem', {
                lineHeight: '1.25rem'
            }],
            base: ['15px', {
                lineHeight: '1.5'
            }],
            lg: ['1.125rem', {
                lineHeight: '1.75rem'
            }],
            xl: ['1.25rem', {
                lineHeight: '1.75rem'
            }],
            '2xl': ['1.5rem', {
                lineHeight: '2rem'
            }],
            '3xl': ['1.875rem', {
                lineHeight: '2.25rem'
            }],
            '4xl': ['2.25rem', {
                lineHeight: '2.5rem'
            }],
            '5xl': ['3rem', {
                lineHeight: '1'
            }],
            '6xl': ['3.75rem', {
                lineHeight: '1'
            }],
            '7xl': ['4.5rem', {
                lineHeight: '1'
            }],
            '8xl': ['6rem', {
                lineHeight: '1'
            }],
            '9xl': ['8rem', {
                lineHeight: '1'
            }],
        },
        fontFamily: {
            gordita: ['"Gordita"'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "15px",
                sm: "15px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px"
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                display: ['Inter var'],
                body: [defaultTheme.fontFamily.sans],

            },
            colors: {
                'lapis-lazuli': {
                    DEFAULT: '#2660a4',
                    100: '#081421',
                    200: '#102742',
                    300: '#173b63',
                    400: '#1f4e84',
                    500: '#2660a4',
                    600: '#3980d0',
                    700: '#6a9fdc',
                    800: '#9cbfe8',
                    900: '#cddff3'
                },
                'black-olive': {
                    DEFAULT: '#1f271b',
                    100: '#060805',
                    200: '#0c100b',
                    300: '#131710',
                    400: '#191f16',
                    500: '#1f271b',
                    600: '#495b40',
                    700: '#739064',
                    800: '#a1b696',
                    900: '#d0dbcb'
                },
                'verdigris': {
                    DEFAULT: '#00afb9',
                    100: '#002325',
                    200: '#004649',
                    300: '#00696e',
                    400: '#008c93',
                    500: '#00afb9',
                    600: '#00ecf9',
                    700: '#3bf5ff',
                    800: '#7cf8ff',
                    900: '#befcff'
                },
                'rosy-brown': {
                    DEFAULT: '#cea2ac',
                    100: '#30191f',
                    200: '#60333d',
                    300: '#904c5c',
                    400: '#b47181',
                    500: '#cea2ac',
                    600: '#d8b4bc',
                    700: '#e1c7cd',
                    800: '#ebdade',
                    900: '#f5ecee'
                },
                'silver': {
                    DEFAULT: '#bebbbb',
                    100: '#262525',
                    200: '#4d4a4a',
                    300: '#736f6f',
                    400: '#999595',
                    500: '#bebbbb',
                    600: '#cbc9c9', theme: {
                        extend: {
                            fontFamily: {
                                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                            },
                            colors: {
                                'lapis-lazuli': {
                                    DEFAULT: '#2660a4',
                                    100: '#081421',
                                    200: '#102742',
                                    300: '#173b63',
                                    400: '#1f4e84',
                                    500: '#2660a4',
                                    600: '#3980d0',
                                    700: '#6a9fdc',
                                    800: '#9cbfe8',
                                    900: '#cddff3'
                                },
                                'black-olive': {
                                    DEFAULT: '#1f271b',
                                    100: '#060805',
                                    200: '#0c100b',
                                    300: '#131710',
                                    400: '#191f16',
                                    500: '#1f271b',
                                    600: '#495b40',
                                    700: '#739064',
                                    800: '#a1b696',
                                    900: '#d0dbcb'
                                },
                                'verdigris': {
                                    DEFAULT: '#00afb9',
                                    100: '#002325',
                                    200: '#004649',
                                    300: '#00696e',
                                    400: '#008c93',
                                    500: '#00afb9',
                                    600: '#00ecf9',
                                    700: '#3bf5ff',
                                    800: '#7cf8ff',
                                    900: '#befcff'
                                },
                                'rosy-brown': {
                                    DEFAULT: '#cea2ac',
                                    100: '#30191f',
                                    200: '#60333d',
                                    300: '#904c5c',
                                    400: '#b47181',
                                    500: '#cea2ac',
                                    600: '#d8b4bc',
                                    700: '#e1c7cd',
                                    800: '#ebdade',
                                    900: '#f5ecee'
                                },
                                'silver': {
                                    DEFAULT: '#bebbbb',
                                    100: '#262525',
                                    200: '#4d4a4a',
                                    300: '#736f6f',
                                    400: '#999595',
                                    500: '#bebbbb',
                                    600: '#cbc9c9',
                                    700: '#d8d6d6',
                                    800: '#e5e4e4',
                                    900: '#f2f1f1'
                                }
                            }
                        },
                    },
                    700: '#d8d6d6',
                    800: '#e5e4e4',
                    900: '#f2f1f1'
                }
            }
        },
    },

    plugins: [forms, typography],
};

import { cva } from "@/styled-system/css";

export const button = cva({
    base: {
        display: 'flex',
        // backgroundColor: buttonThemes[theme ?? 'blue']?.backgroundColor,
        padding: '10px 18px',
        height: '50px',
        borderRadius: '10px',
        gap: '6px',
        fontSize: '25px',
        fontWeight: 500,
        cursor: 'pointer',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        justifyContent: 'center',
        textAlign: 'center',
        width: 'max-content',
        // color: buttonThemes[theme ?? 'blue']?.color,
        userSelect: 'none',
        '&:active': {
            transform: 'scale(.99)'
        }
    },
    variants: {
        padding: {
            false: {
                padding: 0,
            }
        },
        small: {
            true: {
                borderRadius: '8px',
                fontSize: '14px',
            }
        },
        width: {
            full: {
                width: '100%',
            }
        },
        theme: {
            danger: {
                backgroundColor: '#C1000820',
                color: '#FBA0A1',
            },
            dangerFull: {
                backgroundColor: 'red.6',
                color: 'text.0',
                '&:hover': {
                    backgroundColor: 'red.7',
                }
            },
            subtle: {
                backgroundColor: 'transparent',
                color: '#FFFFFF70',
                fontWeight: 500,
                '&:hover': {
                    color: '#FFFFFF60',
                }
            },
            white: {
                backgroundColor: 'text.0',
                color: 'text.4',
                fontWeight: 600,
                '&:hover': {
                    backgroundColor: 'text.1',
                }
            }
        },
    },
    defaultVariants: {
        theme: 'white',
    }
});
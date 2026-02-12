import { createTheme } from "@mui/material";
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';




const darkTheme = createTheme({
    palette:{
        primary:{
            main:"hsl(163, 72%, 41%)"
        },
        secondary:{
            main:"hsl(232, 19%, 15%)"
        },
        background:{
            default:"hsl(230, 17%, 14%)",
            paper:"hsl(228, 28%, 20%)"
        },
        text:{
            primary:"hsl(0, 100%, 100%)",
            secondary:"hsl(230, 22%, 74%)"
        }
    },
    typography:{
        fontFamily: 'Inter, sans-serif',
        h2:{
            fontWeight:"700"
        },
        h4:{
            fontWeight:"700"
        },
    }

});

const lightTheme = createTheme({
    palette:{
        primary:{
            main:"hsl(163, 72%, 41%)"
        },
        secondary:{
           main:"hsl(225, 100%, 98%)" 
        },
        text:{
            primary:"hsl(230, 17%, 14%)", 
            secondary:"hsl(228, 12%, 44%)"
        },
        background:{
            default:"hsl(0, 100%, 100%)",
            paper:"hsl(227, 47%, 96%)"
            
        },
        
    },
    typography:{
        fontFamily: 'Inter, sans-serif',
        h2:{
            fontWeight:"700"
        },
        h4:{
            fontWeight:"700"
        },

    },
});

export {darkTheme, lightTheme};
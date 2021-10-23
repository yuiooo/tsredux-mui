import { createTheme } from "@mui/material/styles"
import { purple, green } from "@mui/material/colors"


export default createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
})


import React from 'react'
import { Box, Container } from '@mui/material'
import AttributeTable from './components/AttributeTable'

interface IAppProps {
    
}

function App(props: IAppProps) {
    console.log(props)
    return (
        <Container fixed>
            <Box sx={{ height: '100vh', bgcolor: '#FFFFFF' }}>
                <AttributeTable />
            </Box>
        </Container>
    )
}

export default App

// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

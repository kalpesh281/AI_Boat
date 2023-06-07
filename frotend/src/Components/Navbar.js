import React from 'react'
import { Box, useTheme, Typography, Link } from "@mui/material"


const Navbar = () => {
    const theme = useTheme()
    return (
        <>
            <Box width={"100%"}
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign={"center"}
                sx={{ boxShadow: 3, mb: 2 }}
            >
                <Typography variant='h1' color={"primary"} fontWeight={"bold"} fontSize={"5rem"}>
                    AI-BOAT
                </Typography>
                <Link href='/register' style={{textDecoration:"none"}} p={1}>Register</Link>
                <Link href='/login' style={{ textDecoration: "none" }} p={1}>Login</Link>
            </Box>
        </>
    )
}

export default Navbar

import React from 'react'
import { Box, useTheme, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

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
                <NavLink to="register" p={1}>Register</NavLink>
                <NavLink to="login" p={2}>Login</NavLink>
            </Box>
        </>
    )
}

export default Navbar

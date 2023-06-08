import React from 'react'
import { Box, useTheme, Typography, Link } from "@mui/material"
import {  useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
    const theme = useTheme()
    const loggedIn = JSON.parse(localStorage.getItem("authToken"))
    const navigate = useNavigate()

    const handleLogout=async()=>{
        try {
            await axios.post("http://localhost:8080/api/v1/auth/logout", );
            localStorage.removeItem("authToken");
            toast.success("Logout Successfully");
            navigate("/login"); 
        } catch (error) {
            console.log(error)
        }
    }
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
                {
                    loggedIn ? (<Link href='/login' style={{ textDecoration: "none" }} onClick={handleLogout} p={1}>Logout</Link>):(<>
                            <Link href='/register' style={{ textDecoration: "none" }} p={1}>Register</Link>
                            <Link href='/login' style={{ textDecoration: "none" }} p={1}>Login</Link>
                </>)
                }
                
            </Box>
        </>
    )
}

export default Navbar

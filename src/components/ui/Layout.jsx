import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layuot(){
    return(
        <Container fixed>
            <Navbar />
            <Outlet />
            <Footer />
        </Container>
    )
}
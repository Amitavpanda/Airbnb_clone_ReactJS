import { Button } from "@mui/material";
import React, { useState } from "react";
import "./banner.css";
import Search from "./search";

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false);

    return ( <
        div className = "banner" >
        <
        div className = "banner_search" > { showSearch && < Search / > } <
        Button onClick = {
            () => setShowSearch(!showSearch) }
        className = "banner_searchButton"
        variant = "contained" >
        { showSearch ? "Hide" : "Search Dates" } <
        /Button> <
        /div> <
        div className = "banner_info" >
        <
        h1 > Get out and stretch your imagination < /h1> <
        h5 >
        Plan a different kind of getaway to uncover the hidden gems near you. <
        /h5> <
        Button variant = "contained" > Explore nearby < /Button> <
        /div> <
        /div>
    );
};

export default Banner;
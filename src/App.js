import "./App.css";
import Header from "./header";
import Home from "./home";
import Footer from "./footer";
import SearchPage from "./searchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return ( <
        div className = "App" >
        <
        Router >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/searchPage"
        element = { < SearchPage / > }
        /> <
        /Routes>

        <
        Footer / >
        <
        /Router> <
        /div>
    );
}

export default App;
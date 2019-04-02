import React, { Component } from "react";
import Navbar from "./components/common/navbar/index";

import SiteFooter from "./components/common/SiteFooter";
import HomePage from "./components/HomePage";

import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import CommiteePage from "./components/CommiteePage";
import NewsPage from "./components/NewsPage";
import NoticePage from "./components/NoticePage";
import EventsPage from "./components/EventsPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import GalleryPage from "./components/GalleryPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/commitee" component={CommiteePage} />
                    <Route path="/news" component={NewsPage} />
                    <Route path="/notice" component={NoticePage} />
                    <Route path="/events" component={EventsPage} />
                    <Route path="/gallery" component={GalleryPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                </Router>
                <SiteFooter />
            </div>
        );
    }
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./features/NavigationBar";
import { Items } from "./features/Items";
import AddItem from "./features/AddItem";
import UpdateItem from "./features/UpdateItem";

function App() {
    return (
        <div className="App">
            <Router>
                <NavigationBar></NavigationBar>
                <Routes>
                    <Route path="/" element={<Items />} />
                    <Route path="/items/add" element={<AddItem />} />
                    <Route path="/items/update" element={<UpdateItem />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

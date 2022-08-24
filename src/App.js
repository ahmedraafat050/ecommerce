import React, { Component } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}


export default connect(mapStateToProps) (Home);

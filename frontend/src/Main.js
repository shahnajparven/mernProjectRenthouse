import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home/Home.js';
import ProductDetails from './component/product/ProductDetails.js';
import Navigation from './layout/nav/Navigation';
import {Switch} from 'react-router-dom';
import ProductCard from './component/Home/ProductCard.js';
import Products from './component/Home/Products.js';
import Product from './component/Home/Product.js';
import Loader from './layout/Loader.js';
import { useSelector} from "react-redux";
import Search from "./component/Home/Search.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./layout/footer/Footer.js";
import Category from "./component/category/Category.js";
import Productttt from "./component/Home/Productttt.js";
import LoginSignUp from "./component/user/LoginSignUp.js";
import { loadUser } from "./actions/userAction.js";
import store from "./store";
import UserOptions from "./layout/Header/UserOperations.js";
import Profile from "./component/user/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/user/UpdateProfile";
import UpdatePassword from "./component/user/UpdatePassword";
import Dashboard from "./component/admin/Dashboard";
import Slidebar from "./component/admin/Slidebar.js";
import ProductList from './component/admin/ProductList';
import NewProduct from "./component/category/NewProduct.js";
import Cart from "./component/cart/Cart.js";
import Pickup from "./component/pickup/Pickup.js";
import Test from "./component/pickup/Test.js";
import Notes from "./component/pickup/Notes.js";

const Main = () => {

    const { isAuthenticated, user } = useSelector((state) => state.user);

    useEffect(() => {
        store.dispatch(loadUser());
      }, []);

  

    return (
      
            <Router>
                <Navigation />

                {isAuthenticated && <UserOptions user={user} />}
                    <Switch>
                        <Route exact path="/"  component={Home} />
                        <Route extact path='/Category' component={Category} />
                        <Route extact path='/Pickup' component={Pickup} />
                        <Route extact path='/Test' component={Test} />
                        <Route extact path='/product/:id' component={ProductDetails} />
                        <Route extact path='/products' component={Products} />
                        <Route path="/products/:keyword" component={Products} />
                        <Route extact path='/ProductCard' component={ProductCard} />
                        <Route extact path='/Product' component={Product} />
                        <Route extact path='/sad' component={Loader} />
                        <Route extact path='/search' component={Search} />
                        <Route extact path='/Productttt' component={Productttt} />
                        <Route extact path='/NewProduct' component={NewProduct} />
                        <Route extact path='/LoginSignup' component={LoginSignUp} />
                        <Route extact path='/Cart' component={Cart} />
                        <Route extact path='/Notes' component={Notes} />



                        <ProtectedRoute extact path='/account' component={Profile} />
                        <ProtectedRoute extact path='/me/update' component={UpdateProfile} />
                        <ProtectedRoute extact path='/password/update' component={UpdatePassword} />     
                        <ProtectedRoute extact path='/Slidebar' component={Slidebar} />

                        <ProtectedRoute isAdmin={true} extact path='/admin/dashboard' component={Dashboard} />

                        <ProtectedRoute isAdmin={true} extact path='/admin/products' component={ProductList} />

                    </Switch>
                    <Footer />
            </Router>

    );
};
export default Main;
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News, Footer} from './component';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path='/' component={Homepage}/>
              <Route exact path='/exchanges' component={Exchanges}/>
              <Route exact path='/cryptocurrencies' component={Cryptocurrencies}/>
              <Route exact path='/crypto/:coinId' component={CryptoDetails}/>
              <Route exact path='/news' component={News}/>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export { App };

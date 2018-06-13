import React from "react";
import {BrowserRouter,HashRouter,Route,Switch} from "react-router-dom";
import Bundle from "../util";
import Home from "bundle-loader?lazy!../container/home";
import List from "bundle-loader?lazy!../container/list";
import Detail from "bundle-loader?lazy!../container/detail";
import App from "bundle-loader?lazy!../container/app";

const LazyLoadComponent=(component)=>{return props=>(<Bundle {...props} load={component}></Bundle>)};

const Routers=()=>(
    <HashRouter>
        <Switch>
            <Route path="/home" component={LazyLoadComponent(Home)}></Route>
            <Route path="/list" component={LazyLoadComponent(List)}></Route>
            <Route path="/detail" component={LazyLoadComponent(Detail)}></Route>
            <Route exact={true} path='/' component={LazyLoadComponent(App)}></Route>
        </Switch>
    </HashRouter>
);

export default Routers;
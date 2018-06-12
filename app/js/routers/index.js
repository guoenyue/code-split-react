import React from "react";
import {BrowserRouter,HashRouter,Route,Switch} from "react-router-dom";
import Bundle from "../util";
import Home from "bundle-loader?lazy!../container/home";
import List from "bundle-loader?lazy!../container/list";
import Detail from "bundle-loader?lazy!../container/detail";
import App from "bundle-loader?lazy!../container/app";

const Routers=()=>(
    <HashRouter>
        <Switch>
            <Route path="/home" component={()=>(<Bundle load={Home}></Bundle>)}></Route>
            <Route path="/list" component={()=>(<Bundle load={List}></Bundle>)}></Route>
            <Route path="/detail" component={()=>(<Bundle load={Detail}></Bundle>)}></Route>
            <Route exact={true} path='/' component={()=>(<Bundle load={App}></Bundle>)}></Route>
        </Switch>
    </HashRouter>
);

export default Routers;
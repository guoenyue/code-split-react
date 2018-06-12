import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Routers from "./js/routers";

const store=createStore((state={},action)=>({}));

ReactDOM.render(
    (<Provider store={store}>
        <div>
            <Routers></Routers>
        </div>
    </Provider>),
    document.getElementById("root")
);

// async function test(){
//     const num=await new Promise(promiseFn);
//     await setTimeout(()=>console.log(num),1000);
// }

// function promiseFn(resolve,reject){
//     setTimeout(()=>resolve(5),3000);
// }



// test();
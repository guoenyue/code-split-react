import React,{Component} from "react";

//const App=()=>(<div>app</div>);

class App extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return (<div>App{this.props.children}</div>);
    }

}

export default App;
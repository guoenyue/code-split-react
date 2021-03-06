import React, {Component} from 'react';
export default class Bundle extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.load(this.props)
        console.log(this.props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }
    load(props){
        this.setState({
            mod:null
        })
        props.load((mod) => {
            this.setState({
                mod:mod.default?mod.default:mod
            })
        })
    }
    render() {
        //return this.props.children(this.state.mod)
        const Tmpl=this.state.mod;
        return typeof this.props.children=='function'&&this.props.children(this.state.mod)||Tmpl&&(<Tmpl {...this.props}></Tmpl>);
    }
}

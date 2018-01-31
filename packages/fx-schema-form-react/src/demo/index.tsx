import React from "react";
import ReactDOM from "react-dom";
import Perf from "react-addons-perf";
import ReactPerfTool from "react-perf-tool";
import { Input } from "antd";

export class IndexComponent1 extends React.PureComponent<any, any> {
    public render() {
        return (
            <div>
                hello world
            </div>
        );
    }
}

export class IndexComponent extends React.PureComponent<any, any> {
    public render() {
        return (
            <div>
                <input type="text" onChange={(e) => {
                    this.setState({
                        a: e.target.value
                    });
                }} />
                <IndexComponent1 key={"d"} time={this.state ? this.state.a : "d"} />
                {this.state ? this.state.a : null}
            </div>
        );
    }
}

ReactDOM.render(<div><IndexComponent />
    <ReactPerfTool perf={Perf} /></div>, document.getElementById("root"), () => {
        console.log("dfajdkfjklajdf");
    });

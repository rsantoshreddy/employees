import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Employee from './components/Employee/Employee';
import helper from './helpers/RestHelper';
import '../resources/css/page.css'; //Webpack can import CSS files too!

export default class Page extends App {

    constructor(props) {
        super(props);
        this.state={
            employees: null
        }

        this.setEmployeeData=this.setEmployeeData.bind(this);
    }
    setEmployeeData(employees){
        this.setState({ employees })
    }

    componentDidMount() {
        helper.get("/data").then(this.setEmployeeData);
    }

    renderEmployeeList(employees){
        if(employees){
            return employees.map((employee, idx)=>{
                return (<Employee {...employee} key={idx}/>);
            });
        }
        return null;
    }

    createBody() {
        const { employees } = this.state;
        return (<div className="main-container">
                {this.renderEmployeeList(employees)}
            </div>);
    }
}

render( < Page / > , document.getElementById("app"));

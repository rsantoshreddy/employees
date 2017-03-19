import React from 'react';
var $ = require('jquery');


const renderEmployees = (employees) => {
    if(employees){
        return employees.map((prop, idx)=>{
            return  (<li key={idx}>{prop.name}</li>);
        });
    }

    return null;
};
const expandEmployees= (id) => {
    console.log("id :" +id);
    $(".panel-body#"+id).toggle();
};

const Employee = (props) => {
    const { name, id, employees } = props;
    return (<div className="panel panel-primary">
        <div className="panel-heading" onClick={()=>expandEmployees(id)}>
            <h3 className="panel-title">{name}</h3>
        </div>
        <div className="panel-body" id={id}>
            <ul>
                {renderEmployees(employees)}
            </ul>
        </div>
    </div>
    );
};

export default Employee;

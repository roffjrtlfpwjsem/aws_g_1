import React from 'react';
 
class Example2 extends React.Component {
    constructor(props){
        super(props);
        
        this.updateNumber = this.updateNumber.bind(this);
    }
    updateNumber(){
        this.props.onUpdate();
    }
 
    render(){
        return (
            <div>
                <h1>number: { this.props.number }</h1>
                <button onClick={this.updateNumber}>click</button>
            </div>
        );
    }
}
 
export default Example2;
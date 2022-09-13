import React from 'react';
 
class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <div> { this.props.body } </div>
            </div>
        );
    }
}
 
export default Content;
import React, {Component} from 'react';
import PopupDom from './PopupDom';
import PopupContent from './PopupContent';
 
import './Style.css'
 
class Main extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            isOpenPopup: false,
        }
 
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
 
    openPopup(){
        this.setState({
            isOpenPopup: true,
        })
    }
 
    closePopup(){
        this.setState({
            isOpenPopup: false,
        })
    }
 
    render(){
        return(
            <div>
                <h2>Open Popup</h2>
                <div>
                    <button type="button"
                            id="popupDom"
                            onClick={this.openPopup}
                    >
                        Click
                    </button>
                    {this.state.isOpenPopup &&
                        <PopupDom>
                            <PopupContent onClose={this.closePopup}/>
                        </PopupDom>
                    }
                </div>
            </div>
        );
    }
}
 
export default Main;
import React, {Component} from 'react';
 
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
 
class Main extends Component {
 
    onClickToastPopup(){
        ToastsStore.info("This is ToastPopup info");
    }

    onClickToastPopup2(){
        ToastsStore.success("This is ToastPopup success");
    }

    onClickToastPopup3(){
        ToastsStore.warning("This is ToastPopup warning");
    }

    onClickToastPopup4(){
        ToastsStore.error("This is ToastPopup error");
    }
 
    render(){
        return(
            <div>
                <header>
                    <h2>Toast Popup</h2>
                </header>
                <div>
                    <button type="button"
                            id="popup"
                            onClick={this.onClickToastPopup}>
                        info Toast
                    </button>

                    <button type="button"
                            id="popup1"
                            onClick={this.onClickToastPopup2}>
                        success Toast
                    </button>

                    <button type="button"
                            id="popup2"
                            onClick={this.onClickToastPopup3}>
                        warning Toast
                    </button>

                    <button type="button"
                            id="popup3"
                            onClick={this.onClickToastPopup4}>
                        error Toast
                    </button>

                    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER}
                                     store={ToastsStore} 
                                     lightBackground/>
                </div>
            </div>
        );
    }
 
}
 
export default Main;
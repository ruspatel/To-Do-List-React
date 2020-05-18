// import React from 'react';
import React, {Component} from 'react';
import './App.css';
import Items from './items';


// function Day(props){

//     return(
//         <div className="day">
//             <form onSubmit={this.addItem}>
//                 <h1>{props.day}</h1>
//                 <input type="text" placeholder="enter task"></input>
//                 <button type="submit">add</button>

//             </form>
//         </div>

//     );
// }


class Day extends Component{
    constructor(props) {
        super(props);

        this.state={
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "" ){
            var newItem = {
                text:   this._inputElement.value,
                key:    Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";

        console.log(this.state.items);

        e.preventDefault();
    }

    render() {
        return(
            <div className="day">
                <form onSubmit={this.addItem}>
                    {/* <h1>{props.day}</h1> */}
                    <input ref={(a) => this._inputElement = a} type="text" placeholder="enter task"></input>
                    <button type="submit">add</button>
            
                </form>
                <Items entries = {this.state.items}/>
            </div>
        );
    }
}

export default Day;
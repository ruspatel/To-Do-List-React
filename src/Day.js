// import React from 'react';
import React, {Component} from 'react';
import './App.css';


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
        
    }

    render() {
        return(
            <div className="day">
                <form onSubmit={this.addItem}>
                    <h1>{props.day}</h1>
                    <input type="text" placeholder="enter task"></input>
                    <button type="submit">add</button>
            
                </form>
            </div>
        );
    }
}

export default Day;
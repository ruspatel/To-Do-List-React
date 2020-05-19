import React, {Component} from 'react';
import './items.css';
import './App.css';

class items extends Component{
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item){
        return <li className="item" list-style-type = "none"
        onClick={() => this.delete(item.key)} 
                    key={item.key}>{item.text}</li>
        // return <li onClick={() => this.delete(item.key)} 
        //             key={item.key}>{item.text}</li>
    }
    
    delete(key) {
        this.props.delete(key);
    }

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <div className="totalItems">
                <div className="item">
                    <ul>{listItems}</ul>
                </div>
            </div>
            // <ul>{listItems}</ul>
        );
    }
}

export default items;
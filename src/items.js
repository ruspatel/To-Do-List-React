import React, {Component} from 'react';

class items extends Component{
    createTasks(item){
        return <li key={item.key}>{item.text}</li>
    }

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul>{listItems}</ul>
        );
    }
}

export default items;
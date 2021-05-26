import React from 'react';
import ContactsList from './ContactsList';

let contacts = [{
    id: 1,
    name: 'MyInfo',
    phone: '720-771-7373'
},{
    id: 2,
    name: 'Wifey',
    phone: '970-215-1441'
}]

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                <ContactsList contacts={this.props.contacts}/>
            </div>
        )
    }
}

React.render(<App contacts={contacts}/>, document.getElementById('app'));
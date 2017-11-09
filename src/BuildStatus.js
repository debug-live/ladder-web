import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Websocket from 'react-websocket';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.buildList = this.props.location.state;
        let map = new Map();
        for (let item of this.buildList) {
           map.set(item, 'wait');
        }

        this.state = {data: map};
    }

    handleStatus(str) {
        console.log(typeof(str));
        var json = JSON.parse(str);
        console.log(typeof(json));
        // let data = Object.assign(new Map(), this.state.data);
        this.state.data.set(json.lang, json.status);
        this.setState({data: this.state.data});
    }

    render() {
        return(
            <div>
                <Websocket url='ws://127.0.0.1:8000/'
                           onMessage={this.handleStatus.bind(this)}/>
                <h3>Build Status</h3>
                <ListGroup>
                    {
                        this.buildList.map(lang => (
                            <ListGroupItem key={lang}>{lang + ':' + this.state.data.get(lang)}</ListGroupItem>
                        ))
                    }
                </ListGroup>
                <b><Link to='/'>back to home</Link></b>
            </div>
        );
    }
}

export default About;
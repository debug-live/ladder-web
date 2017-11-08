import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.buildList = this.props.location.state;
    }

    render() {
        return(
            <div>
                <h3>Build Status</h3>
                <ListGroup>
                    {
                        this.buildList.map(lang => (
                            <ListGroupItem key={lang}>{lang}</ListGroupItem>
                        ))
                    }
                </ListGroup>
                <b><Link to='/'>back to home</Link></b>
            </div>
        );
    }
}

export default About;
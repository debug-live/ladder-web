import React from 'react';
import { Link } from 'react-router-dom';
import { withAxios } from 'react-axios';
import { ListGroup, ListGroupItem, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class LanguageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {languages: [], buildList: []};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentWillMount() {
        this.props.axios.get('/api/languages').then(result => {
            if (result.status === 200) {
                this.setState({
                    languages: result.data.data,
                });
            }
        })
    }

    handleToggle = index => () => {
        const {buildList} = this.state;
        const currentIndex = buildList.indexOf(index);
        const newList = [...buildList];

        if ( currentIndex === -1) {
            newList.push(index);
        } else {
            newList.splice(currentIndex, 1);
        }

        this.setState({buildList: newList});
    };

    handleSubmit() {
        let { buildList } = this.state;

        this.props.axios.post('/api/build', {list: buildList}).then(result => {
            if(result.status === 201) {
                this.props.history.push('/build-status', buildList);
            }
        });
    }

    render() {
        let languages = this.state.languages;

        return (
            <div>
                <h3>Language List</h3>
                <ListGroup>
                {
                    languages.map(lang => (
                        <ListGroupItem key={lang.id}>
                            <Input type="checkbox" onClick={this.handleToggle(lang.id)}/>
                            <Link to={`/languages/${lang.id}`}>{lang.desc}</Link>
                        </ListGroupItem>
                    ))
                }
                </ListGroup><br/>
                <Button color='secondary' onClick={this.handleSubmit}>Build</Button>
                {/*<h5><Link to='/about'>About us</Link></h5>*/}
            </div>
        );
    }
}

export default withAxios(LanguageList);
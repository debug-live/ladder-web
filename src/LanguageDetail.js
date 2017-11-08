import React from 'react';
import { Link } from 'react-router-dom';
import { withAxios } from 'react-axios';
// import axios from 'axios';

class LanguageDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {language: { // fixme
            id: 0,
            name: '',
            desc: ''
        }};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.axios(`/api/languages/${id}`).then(result => {
            this.setState({language: result.data});
        })
    }

    // bad performance
    handleChange(event) {
        let language = Object.assign({}, this.state.language);
        language[event.target.name] = event.target.value;
        // alert(event.target);
        this.setState({language: language});
    }

    handleSubmit(event) {
        event.preventDefault();

        // var f = document.querySelector('form');
        // let fd = new FormData();
        // fd.append('aa', 11);
        // console.log(f);
        //
        // fetch("/api/customers", {
        //     method: 'POST',
        //     // headers: {'Content-Type':'application/json'},
        //     body: new FormData(f)
        // }).then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(e => console.log("Oops, error", e));

        let build = {name: this.state.language.name};

        this.props.axios.post(`/api/build`, build)
            .then(response => {
                this.props.history.push('/build-status');
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h5>User info</h5>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name='name' value={this.state.language.name} onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Desc:
                            <input type="text" name='desc' value={this.state.language.desc} onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>

                <h3><Link to='/about'>About us</Link></h3>
            </div>
        );
    }
}

export default withAxios(LanguageDetail);
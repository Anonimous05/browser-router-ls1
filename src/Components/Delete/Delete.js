import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";
import './Delete.css'

class Delete extends Component {

    state = {
      idProduct:[]
    };

    deleteHandler = async () => {
      await axiosAPI.delete('/korzina/' + this.props.match.params.id + '.json');
      this.props.history.push('/korzina');
    };

    cancelHandler = async () => {
      await this.props.history.push('/korzina');
    };

    async componentDidMount() {
        const response = await axiosAPI.get('/korzina/' + this.props.match.params.id + '.json');
        this.setState({idProduct: response.data})
    }

    render() {
        return (
            <div className="container4">
                <h1 className="title">You wanted delete this product?</h1>
                <div className="buttons">
                    <button onClick={this.deleteHandler} className="delete2">delete</button>
                    <h1>or</h1>
                    <button onClick={this.cancelHandler} className="cancel2">cancel</button>
                </div>
            </div>
        );
    }
}

export default Delete;
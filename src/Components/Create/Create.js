import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";
import './Create.css';

class Create extends Component {

    state = {
        createName: '',
        createPrice: '',
        createImage: '',
        products: [],
        disable: false,
    };

    inputValHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    createHandler = async () => {
        if(this.state.createName === ''|| this.state.createPrice === ''|| this.state.createImage === ''){
            this.setState({disable: true});
        }
        else {
            this.setState({disable: false});
            const object = {
                productImage: this.state.createImage,
                price: this.state.createPrice,
                productName: this.state.createName,
            };
            await axiosAPI.put('/products/' + this.props.match.params.id + '.json', object);
            this.props.history.push('/');
        }
    };

    async componentDidMount() {
        const response = await axiosAPI.get(this.props.match.params.id + '/products/.json');
        this.setState({products: response.data});
    };


    deleteHandler = async () => {
      await axiosAPI.delete('/products/' + this.props.match.params.id + '.json');
      this.props.history.push('/');
    };

    cancelHandler = () => {
        this.props.history.push('/')
    };

    render() {
        return (
            <div className="container3">

                <button className="delete" onClick={this.deleteHandler}>Delete</button>
                <p>Редактировать имя товара:</p>
                <input className="in-1" type="text" name="createName" onChange={this.inputValHandler}/>
                      <p>Редактировать цену товара:</p>
                       <input className="in-2" type="text" name="createPrice" onChange={this.inputValHandler}/>
                <p>Редактировать фото товара:</p>
                       <input className="in-3" type="text" name="createImage" onChange={this.inputValHandler}/>
                       <div className="btns">
                           <button disabled={this.state.disable} className="create" onClick={this.createHandler}>create</button>
                           <button className="cancel" onClick={this.cancelHandler}>cancel</button>
                       </div>
            </div>
        );
    }
}

export default Create;
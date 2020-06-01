import React, {Component} from 'react';
import axiosAPI from '../../axiosAPI';
import './Add.css'

class Add extends Component {

    state = {
        productImage:'',
        price:'',
        productName:'',
        disable: false,
    };

    inputValHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    addHandler = async () => {
        if(this.state.productName === ''|| this.state.price === ''|| this.state.productImage === ''){
            this.setState({disable: true})
        }
        else {
            this.setState({disable: false});
            const object = {
                productImage: this.state.productImage,
                price: this.state.price,
                productName: this.state.productName
            };
            await axiosAPI.post('.json', object);
            this.props.history.push('/');
        }
    };

    closeHandler = () =>{
        this.props.history.push('/')
    };

    render() {
        return (
            <div className="container1">
                <div className="input_btn">
                        <p>Имя товара</p>
                <input className="in-1" type="text" name="productName" placeholder="Имя товара" onChange={this.inputValHandler}/>
                <p>Фото товара</p>
                <input className="in-2" type="text" name="productImage" placeholder="Фото товара" onChange={this.inputValHandler}/>
                   <p>Цена товара</p>
                <input className="in-3" type="text" name="price" placeholder="Цена товара" onChange={this.inputValHandler}/>
                <div className="btns">
                <button className="button_ok" onClick={this.addHandler}>Add</button>
                <button className="button_no" onClick={this.closeHandler}>cancel</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Add;
import React, {Component} from 'react';
import axiosAPI from '../../axiosAPI';
import './Main.css';
import {nanoid} from "nanoid";
import {NavLink} from "react-router-dom";

class Main extends Component {

    state = {
        products:[],
        productImage:'',
        price: '',
        productName:'',
        all:[],
    };


    async componentDidMount(){
      const response = await axiosAPI.get( '/products/.json');
      this.setState({products: response.data});
    };

    addHandler2 = async (id,productImage,price,productName) => {
        const object = {
            productImage: productImage,
            productName:productName,
            price:price,
        };
            await axiosAPI.post( '/korzina/.json',object);
            this.props.history.push('/')
        };

        render() {
        return (
            <div className="container">
                <div className="products">
                    {this.state.products &&  Object.keys(this.state.products).map(info => (
                        <div className="block" key={nanoid()}>
                            <div className="block_img">
                            <img src={this.state.products[info].productImage} alt="NAN"/>
                            </div>
                            <p className="name">Имя: {this.state.products[info].productName}</p>
                            <p className="price">Цена: {this.state.products[info].price} сом</p>
                            <NavLink className="edit" to={`/create/${info}`}>Edit</NavLink>
                            <button className="delete3" onClick={() => this.addHandler2(info,this.state.products[info].productName,
                                this.state.products[info].productImage,
                                this.state.products[info].price)}>в корзину</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Main;
import React, {Component} from 'react';
import axiosAPI from '../../axiosAPI';
import './Main.css';
import {nanoid} from "nanoid";
import {NavLink} from "react-router-dom";

class Main extends Component {

    state = {
        products:[],
    };


    async componentDidMount(){
      const response = await axiosAPI.get( '.json');
      this.setState({products: response.data});
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
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Main;
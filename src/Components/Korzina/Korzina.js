import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";
import {nanoid} from "nanoid";
import './Korzina.css';
import {NavLink} from "react-router-dom";
import Price from "../../Price";

class Korzina extends Component {

    state = {
      korzina:[],
        modal:false,
        price:[0]
    };

    async componentDidMount(){
        const response = await axiosAPI.get('/korzina/.json');
        this.setState({korzina: response.data});
    }

    render() {
        return (
            <div className="container2">
                <h1>Моя корзина</h1>
                <Price/>
                <div className="korzins">
                {this.state.korzina &&  Object.keys(this.state.korzina).map(info => (
                    <div key={nanoid()}>
                        <div className="block">
                            <div className="block_img">
                                <img src={this.state.korzina[info].price} alt="NAN"/>
                            </div>
                                <p className="name">Имя: {this.state.korzina[info].productImage}</p>
                                <p className="price">Цена: {this.state.korzina[info].productName} сом</p>
                                <NavLink to={`/delete${info}`}>delete</NavLink>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default Korzina;
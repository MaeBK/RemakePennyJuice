import { Component } from 'react';  
export default class ProductCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            image: this.props.products.product_Image ,
            name:  this.props.products.product_Name  ,
            price: this.props.products.product_Price  ,
            flavor:this.props.products.product_Flavor 
        }
    }
    render() {
        return(
        <li className="list-item">
            <img className="item-image" src={this.state.image} alt={this.state.name} />
            <div className='item-wrapper'>
            <h3 className="item-name">{this.state.name}</h3>
            <p className="item-price">{this.state.price}.00$</p>
            <p className="item-flavor">Flavor:{this.state.flavor}</p>
            </div>
        </li>
        )
    }
}
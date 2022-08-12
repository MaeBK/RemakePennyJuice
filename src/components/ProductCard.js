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
        <li>
            <img src={this.state.image} alt={this.state.name} />
            <h3>{this.state.name}</h3>
            <p>{this.state.price}.00$</p>
            <p>Flavor:{this.state.flavor}</p>
        </li>
        )
    }
}
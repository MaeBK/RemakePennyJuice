import { Component } from 'react';  




// export default class ProductCard extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             isFetching: false,
//             image: this.props.products.product_image ,
//             name: this.props.products.procuct_name  ,
//             price: this.props.products.product_price  ,
//             flavor: this.props.products.product_flavor 
//         }
//     }

  
//     render() {
//         return(
//         <li>
//             <img src={this.state.image} alt={this.state.name} />
//             <h3>{this.state.name}</h3>
//             <p>{this.state.price}</p>
//             <p>{this.state.flavor}</p>
//         </li>
//         )
//     }
// }


const ProductCard = (props) => {
    console.log(props)
    return (
        <li>
            <img src={props.products.product_Image} alt={props.products.product_Image} />
            <h3>{props.products.procuct_Name}</h3>
            {/* <p>{props.products.product_price.numberDecimal}</p> */}
            <p>{props.products.product_Flavor}</p>
        </li>
    )
}

export default ProductCard

//         <li>
//             <img src={this.state.image} alt={this.state.name} />
//             <h3>{this.state.name}</h3>
//             <p>{this.state.price}</p>
//             <p>{this.state.flavor}</p>
//         </li>

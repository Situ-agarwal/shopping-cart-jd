import  React from 'react';
import { connect }  from 'react-redux';
import axios from 'axios';
import {fetchProducts} from './productActions'
import MenuItem from '../MenuItem/menuItem.component'
import './productList.styles.css'
class ProductList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          product: null,
        };}
        componentDidMount(){
            axios.get('http://omega.jdomni.com/omni-automation-tools/training/getAllProducts?auth_key=6c55fa36a2138b23a52e74619bfdae147fa0c3e1&pageNo=1&itemsPerPage=10')
            .then(res =>{
                console.log(res.data)
                this.props.onInit(res.data.products);
               
              })
        }
    render(){
        console.log("sss",this.props.products)
        if(this.props.products!==undefined){
            return(
            <div className='collection-preview'>
                <div className='preview'>
                   {this.props.products.map(item=>(
                       <MenuItem productItem={item}></MenuItem>
                   ))}
                    </div>
         </div>
        )}
        else{return null}
    
}
    
}
const mapDispatchToProps = dispatch => ({
    onInit:(item)=>dispatch(fetchProducts(item))
  });
export default connect((state) => ({ products: state.productReducer.products,cartItems:state.cartItemsReducer.cartItems}),mapDispatchToProps)(ProductList);
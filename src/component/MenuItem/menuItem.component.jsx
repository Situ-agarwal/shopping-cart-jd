import React from 'react';
import {connect} from 'react-redux'
import {addItem,subtractItem} from '../Cart/cartActions';
import   './menuItems.styles.css'
class MenuItem extends React.Component{
   constructor(props){
       super(props);
       this.state={
           isAddBtnClick:false,
           count:this.props.productItem.cartQuantity
       }
   }
    handleClick=(itemsToBeAdded)=>{
        itemsToBeAdded.cartQuantity=itemsToBeAdded.cartQuantity+1;
        this.props.addItem(itemsToBeAdded);
         this.setState({isAddBtnClick:true,count:itemsToBeAdded.cartQuantity})   
    }
    subtractItem=(product)=>{
        product.cartQuantity=product.cartQuantity-1;
        this.props.subtractItem(product); 
        this.setState({count:product.cartQuantity})

    }
    addItem=(cartItemToAdd)=>{
         cartItemToAdd.cartQuantity=cartItemToAdd.cartQuantity+1;
               console.log('cartItemToAdd',cartItemToAdd)
               this.setState({count:cartItemToAdd.cartQuantity})
       this.props.addItem(cartItemToAdd);
    }
   /*  getData=(productItem,cartItem)=>{
        const productItemList=cartItem.map(function(value) {
            if(value.id!== productItem.id){
                productItem.cartQuantity=0;
            }
            return productItem;
          })
          console.log('menu',productItem);
          console.log(productItemList)
    } */
    render(){
        const {productItem}=this.props;
    return (
        <div className='collection-item'>
            <img
        className='image'
        src={productItem.imageUrl} alt={productItem.name}      
      />        
            <div className='collection-footer'>
            <span className='title'>{productItem.name}</span> 
            <div className='price'><i class="fa fa-inr" aria-hidden="true">{productItem.price}</i></div>
            { productItem.cartQuantity>0 ?
             <span className='quantity'>
             <span className='arrow' onClick={() => this.subtractItem(productItem)}>
             &#8722;
             </span>
             <span className='value'>{productItem.cartQuantity}</span>
             <span className='arrow' onClick={() => this.addItem(productItem)}>
             &#43;
             </span>
           </span>:
              <div className='add-button' onClick={()=>{this.handleClick(productItem)}}><i class="fa fa-plus-circle" aria-hidden="true">ADD</i></div>
            }
            
           </div>
            </div>
    )
    }}
    const mapDispatchToProps = dispatch => ({
        addItem: item => dispatch(addItem(item)),
        subtractItem:item => dispatch(subtractItem(item))
      });  
export default connect(undefined,mapDispatchToProps)(MenuItem);
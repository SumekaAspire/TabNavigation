import React,{useState,useEffect, createContext, useReducer,useContext} from 'react'
import { ToastContainer,toast} from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';


export const CartContext = createContext();

const intialState = JSON.parse(localStorage.getItem("cart")) || [];


function cartReducer(state, action){
   switch(action.type){
    case "ADD_TO_CART":
       const existingProduct = state.find((item)=> item.id === action.payload.id);
       if(existingProduct){
         return state.map(item => 
            item.id === action.payload.id ? {...item, quantity: item.quantity +1} : item
            );
        }
        return [...state,{...action.payload, quantity: 1}];
        
    case "REMOVE_FROM_CART":
        return state.filter(item => item.id !== action.payload);

    case "INCREASE_QTY":
        return state
            .map(item => 
                item.id === action.payload ?{...item, quantity:item.quantity + 1} : item
            );

    case "DECREASE_QTY":
        return state
            .map(item=>
                   item.id === action.payload ? {...item, quantity: item.quantity -1} :  item
            )
            .filter((item) =>item.quantity >0);//here it removes item with 0
        

    case "CLEAR_CART":
        return [];

    default:
        return state;
        
   }
}

export const CartProvider=({children})=>{
    const[cart, dispatch] = useReducer(cartReducer, intialState);

        //saved to localStorage whenever cart changes
        useEffect(()=> {
            localStorage.setItem("cart", JSON.stringify(cart));
        },[cart]);

    //Action Dispatchers - wrapper functions
    const addToCart = (product)=> {
        dispatch({type: "ADD_TO_CART", payload: product});
        toast.success("product is added to cart!");

    }
    const removeFromCart=(id) => dispatch({type:"REMOVE_FROM_CART", payload: id});
    const increaseQty=(id)=>dispatch({type:"INCREASE_QTY",payload: id});
    const decreaseQty=(id) => dispatch({type:"DECREASE_QTY",payload: id});
    const clearCart =() =>{
        dispatch({type:"CLEAR_CART"});
        toast.info("Cart cleared");

    }
    

    
    return(
        <CartContext.Provider value={{cart,addToCart, removeFromCart,clearCart, increaseQty, decreaseQty}}>
            {children}
             <ToastContainer position='top-center' autoClose={1000}/>
        </CartContext.Provider>
        
    )
}

//custom hook for clean usage

export const useCart=() =>useContext(CartContext);
















// import React,{useState,useEffect, createContext} from 'react'
// import { ToastContainer,toast} from 'react-toastify';
// //import 'react-toastify/dist/ReactToastify.css';


// export const CartContext = createContext();

// export const CartProvider=({children})=>{
//     // const[cart, setCart] = useState([]);
//         const[cart, setCart] = useState(()=>{
//             const savedCart = localStorage.getItem("cart");
//             return savedCart ? JSON.parse(savedCart) : [];
//         })

//         //saved to localStorage whenever cart changes
//         useEffect(()=> {
//             localStorage.setItem("cart", JSON.stringify(cart));
//         },[cart]);


//     const addToCart=(product)=>{
//         const existingProduct = cart.find((item)=> item.id === product.id);
//         if(existingProduct){
//            setCart(
//             cart.map((item)=> item.id === product.id ? {...item, quantity: item.quantity +1} : item)
//            );
//         }else{
//            setCart([...cart,{...product, quantity: 1}]);
//         }
//         toast.success("product is added");
//     }

//     const removeFromCart =(id)=>{
//         setCart(cart.filter((item) => item.id !== id)); //it keeps the item not th remove item
//     }
//     const increaseQty =(id)=>{
//         setCart((prev)=>
//             prev.map((item) =>
//                 item.id === id ? {...item, quantity: item.quantity +1} : item
//             )
//         )
//     };

//     const decreaseQty =(id)=>{ 
//         setCart((prev) =>
//              prev.map((item)=>
//                    item.id === id ? {...item, quantity: item.quantity -1} :  item
//             )
//             .filter((item) =>item.quantity >0) //here it removes item with 0
//         )
//     }

//     const clearCart =()=>{
//          setCart([]);
//          localStorage.removeItem("cart");
//     }

    

    
//     return(
//         <CartContext.Provider value={{cart,addToCart, removeFromCart,clearCart, increaseQty, decreaseQty}}>
//             {children}
//              <ToastContainer position='top-center' autoClose={1000}/>
//         </CartContext.Provider>
        
//     )
// }
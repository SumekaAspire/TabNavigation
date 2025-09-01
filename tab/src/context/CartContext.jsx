import React,{useState,useEffect, createContext} from 'react'
import { ToastContainer,toast} from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';


export const CartContext = createContext();

export const CartProvider=({children})=>{
    // const[cart, setCart] = useState([]);
        const[cart, setCart] = useState(()=>{
            const savedCart = localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : [];
        })

        //saved to localStorage whenever cart changes
        useEffect(()=> {
            localStorage.setItem("cart", JSON.stringify(cart));
        },[cart]);


    const addToCart=(product)=>{
        const existingProduct = cart.find((item)=> item.id === product.id);
        if(existingProduct){
           setCart(
            cart.map((item)=> item.id === product.id ? {...item, quantity: item.quantity +1} : item)
           );
        }else{
           setCart([...cart,{...product, quantity: 1}]);
        }
        toast.success("product is added");
    }

    const removeFromCart =(id)=>{
        setCart(cart.filter((item) => item.id !== id)); //it keeps the item not th remove item
    }
    const increaseQty =(id)=>{
        setCart((prev)=>
            prev.map((item) =>
                item.id === id ? {...item, quantity: item.quantity +1} : item
            )
        )
    };

    const decreaseQty =(id)=>{ 
        setCart((prev) =>
             prev.map((item)=>
                   item.id === id && item.quantity >1 ? {...item, quantity: item.quantity -1} :  item
            )
        )
    }

    const clearCart =()=>{
         setCart([]);
         localStorage.removeItem("cart");
    }

    

    
    return(
        <CartContext.Provider value={{cart,addToCart, removeFromCart,clearCart, increaseQty, decreaseQty}}>
            {children}
             <ToastContainer position='top-center' autoClose={1000}/>
        </CartContext.Provider>
        
    )
}
import { doc, updateDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

export const useFetchProductData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    
    const productsRef = collection(db, "products");
    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const data = await getDocs(productsRef);
                const grabbedData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
                setData(grabbedData);
            } catch (err) {
                console.error('Error fetching data:', err);
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            } 
        }

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    dispatch(cartActions.replaceCartData(data));

    return {data, isLoading}
};


export const updateCartData = async (item, isNew) => {
    const docRef = doc(db, 'products', item.id);
    console.log(docRef);
    console.log(item);
    try {
        await updateDoc(docRef, {
            quantity: item.quantity,
            totalPrice: item.price * item.quantity,
        });
        toast.success(`Item ${isNew ? 'added to' : 'changed in'} cart!`, {
            position: toast.POSITION.TOP_CENTER
        });
    } catch (err) {
        console.error(err);
        toast.error("There was an error", {
            position: toast.POSITION.TOP_CENTER,
        });
    }
};

export const removeCartItem = async (id) => {
    console.log(id);
    try {
        const docRef = doc(db, 'products', id);
        await updateDoc(docRef, {
            quantity: 0,
            totalPrice: 0,
        });
        toast.success("Item removed from cart!", {
            position: toast.POSITION.TOP_CENTER
        });
    } catch (err) {
        console.log(err);
    }
};
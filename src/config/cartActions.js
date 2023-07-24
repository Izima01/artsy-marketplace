import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export const updateCartData = async (item) => {
    const docRef = doc(db, 'products', item.id);
    console.log(docRef);
    console.log(item);
    try {
        await updateDoc(docRef, {
            quantity: item.quantity,
            totalPrice: item.price * item.quantity,
        });
    } catch (err) {
        console.error(err);
    }
};

export const removeCartItem = async (item) => {
    console.log(item);
    try {
        const docRef = doc(db, 'products', item.id);
        await updateDoc(docRef, {
            quantity: 0,
            totalPrice: 0,
        });
    } catch (err) {
        console.log(err);
    }
};
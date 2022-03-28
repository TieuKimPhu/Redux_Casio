import { ADD_PRODUCTS, DELETE_PRODUCTS } from "../type";

export const deletePro = (id) => {
    return {
        type: DELETE_PRODUCTS,
        payload: id,
    };
};

export const addPro = (data) => {
    return {
        type: ADD_PRODUCTS,
        payload: data,
    };
};


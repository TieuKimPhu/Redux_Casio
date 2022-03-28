import { ADD_PRODUCTS, DELETE_PRODUCTS } from "../type";

const initialState = {
    products: [
        {
            id: 1,
            tenSP: "G-SHOCK GM-2100MG-1A",
            src: "https://www.casio-vietnam.vn/wp-content/uploads/2021/12/GM-2100MG-1A-333x400.png",
        },
        {
            id: 2,
            tenSP: "G-SHOCK GST-B400MV-5A",
            src: "https://www.casio-vietnam.vn/wp-content/uploads/2021/11/GST-B400MV-5A-333x400.png",
        },
        {
            id: 3,
            tenSP: "G-SHOCK GM-2100-1A",
            src: "https://www.casio-vietnam.vn/wp-content/uploads/2021/10/GM-2100-1A-333x400.png",
        },
        {
            id: 4,
            tenSP: "G-SHOCK GM-5600SN-1",
            src: "https://www.casio-vietnam.vn/wp-content/uploads/2021/10/GM-5600SN-1-333x400.png",
        },
        {
            id: 5,
            tenSP: "G-SHOCK MTG-B2000PH-2A",
            src: "https://www.casio-vietnam.vn/wp-content/uploads/2021/06/MTG-B2000PH-2A-333x400.png",
        },
    ],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCTS:
        return {
            ...state,
            products: state.products.filter((item) => item.id !== action.payload),
        };
        case ADD_PRODUCTS:
        return {
            ...state,
            products: [...state.products, action.payload],
        };
        
        default:
            break;
    }
    return state;
};
export default productReducer;

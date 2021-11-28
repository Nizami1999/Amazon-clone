import { TAction, IState, TReducer } from "./types";

export const initialState: IState = {
  products: [
    {
      id: 1,
      name: "Apple iPhone 13 (256GB, Starlight) [Locked] + Carrier Subscription",
      rating: 5,
      image:
        "https://s13emagst.akamaized.net/products/40685/40684414/images/res_974dc0e4b6a1180b612c24afef8eb494.jpg?width=450&height=450&hash=F600B744D72D180CBB4A7B23AD814449",
      price: 3999.99,
    },
    {
      id: 2,
      name: "Samsung Galaxy Z Flip 3 5G Factory Unlocked Android Cell Phone US Version Smartphone Flex Mode Intuitive Camera Compact 128GB Storage US Warranty, Phantom Black",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71InZW4fuvL._AC_SL1500_.jpg",
      price: 999.99,
    },
    {
      id: 3,
      name: "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg",
      price: 1190.0,
    },
    {
      id: 4,
      name: "iClever BK10 Bluetooth Keyboard, Multi Device Keyboard Rechargeable Bluetooth 5.1 with Number Pad Ergonomic Design Full Size Stable Connection Keyboard for...",
      rating: 3,
      image: "https://m.media-amazon.com/images/I/71YC8rX-dKL._AC_SL1500_.jpg",
      price: 3999.99,
    },
    {
      id: 5,
      name: "Sceptre IPS 27' QHD 2560 x 1440p LED Monitor DisplayPort HDMI up to 165Hz AMD FreeSync Premium 99% sRGB Build-in Speakers",
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/61SxddIxYBL._AC_SX960_SY720_.jpg",
      price: 3999.99,
    },
    {
      id: 6,
      name: "SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg",
      price: 3999.99,
    },
  ],
  basket: [],
  user: null,
};

const reducer: TReducer = (state: IState, action: TAction) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== action.payload),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

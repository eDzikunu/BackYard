export const initialState = {
    basket: [],
    user: null,
  };
  
  //Define getBasketTotal
  export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  };
  
  const basketReducer = (state, action) => {
    console.log("Current State:", state);
    console.log("Dispatched Action:", action);
  
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
  
      //Right way
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(
            `Can't remove item (id: ${action.id}) as it's not in the basket!`
          );
        }
  
        return {
          ...state,
          basket: newBasket,
        };
  
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      default:
        return state; //Ensures the state remains unchanged for unknown action types
    }
  };
  
  export default basketReducer;
  
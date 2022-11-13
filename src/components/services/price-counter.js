const priceCounter = { count: 0 };

const priceReducer = (costState, action) => {
  switch (action.type) {
    case "increment":
      return { count: costState.count + action.payload };
    case "decrement":
      return { count: costState.count - action.payload };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  };
};

export { priceCounter, priceReducer };
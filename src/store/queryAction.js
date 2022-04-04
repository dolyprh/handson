function setQuery(amount) {
    return {
      type: "set",
      payload: amount
    };
  }
  
  export default setQuery;
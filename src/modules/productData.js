import axios from "axios";

const getData = async () => { 
  const response = await axios.get("/product");

  return response;
};

export { getData };
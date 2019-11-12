import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID aecbb03ffd0209242b2bc40d27993ad2d7719ac4c66a1543f15139be5e102799"
  }
});

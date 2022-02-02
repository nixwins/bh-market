import {GET_PRODUCTS, GET_MASTER_PRODUCT_BY_SLUG } from "./resources";

export default class ProductService{

  #axios = null;

  constructor($axios){
    this.#axios = $axios;    
  }

  getAllProducts = async (page = 1)=>{
    const params = {
    sortOrder: "asc",
    categories: 2
    }
    const response = await this.#axios.post(`${GET_PRODUCTS}?page=${page}`, params);
    return response?.data.products;
  }

  getProduct = async (slug)=>{
    const response = await this.#axios.get(`${GET_MASTER_PRODUCT_BY_SLUG}/${slug}`); 
    return response.data.product;
  }

}

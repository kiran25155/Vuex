const products=[{}]
export default{
    getProduct(){
        return products;
    },
    setProduct(e:any){
        products.push(e);
    }
}
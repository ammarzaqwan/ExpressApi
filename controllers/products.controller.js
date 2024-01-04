//temp db
let products = [
{
    id:1,
    name:"Watermelon",
    price:1
},
{
    id:2,
    name:"Mango",
    price:2
},
{
    id:3,
    name:"Apple",
    price:3
}

];




const getProduct = (req,res)=> {
    res.json(products);
};


const getProductById = (req,res)=>{
    const {id} = req.params;
    const product = products.find((u)=> u.id == Number(id));
    if(!product) return res.json ({error : "Product does not exist"});
    res.json(product);
};

const createProduct = (req,res)=>{
    const {id,name,price} = req.body ; 
    if(!(id &&  name && price) ) return res.json ({error : "Bad request"});
    const product = {id,name,price};

    if(products.find((u)=>u.id==Number(id))) return res.json({error : " Product ID exist"});
    products.push(product);
    res.json(product);

};

const deleteProductById = (req,res)=>{
    const {id}=req.params;
    const product = products.find((u)=>u.id == Number(id));
    if(!product) res.json ({error:"Product does not exist"});
    products = products.filter((u)=> u.id != Number(id));
    res.json(product);

};


const updateProductById = (req,res)=>{
    const {id}=req.params;
    const product = products.find((u)=>u.id == Number(id));
    if(!product) res.json ({error:"Product does not exist"});
    products = products.filter((u)=> u.id != Number(id));
    const updatedProduct = {
        ...product,
        ...req.body
    };

    products.push(updatedProduct);
    res.json(updatedProduct);

}

module.exports={getProduct,getProductById,createProduct,deleteProductById,getProduct,updateProductById};
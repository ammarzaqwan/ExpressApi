const {Router}=require ('express')
const indexRouter=require('./index.router')
const productRouter=require ('./products.router')
const pyramidRouter=require ('./pyramid.router')

const router = Router ();

router.use('/',indexRouter);
router.use('/products',productRouter);
router.use('/pyramid',pyramidRouter);


module.exports = {router};
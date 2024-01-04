const express = require('express');
const {router}=require('./routers');
const app = express();


app.use(express.json());
app.use('/',router);

app.listen(3300, () => 
console.log(`Assignment product running`));
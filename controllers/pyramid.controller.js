const LinePyramid = (req,res)=>{
    const {n} = req.params ; 
    let pyramid=[];
    for (let i = 1 ; i<=n ;i++){
        pyramid.push('*'.repeat(i));
    };

    res.json(pyramid);
};


module.exports = {LinePyramid};
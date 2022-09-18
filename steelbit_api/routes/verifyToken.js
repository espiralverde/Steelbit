const jwt = require("jsonwebtoken")

const verifyToken =(req,res,next) =>{
    const authHeader = req.headers.token;
    
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err,user)=>{
            if(err) res.status(403).json("Error - Token no válido");
            req.user = user //este user es el mismo que pasé como parámetro en la linea 7
            next();
        });
    }else{
        return res.status(401).json("No está autenticado");
    }
};

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin){
            next()
        }
        else{
            res.status(403).json("No autorizado")
        }
    });
};

const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res, () => {
        if (req.user.isAdmin){
            next()
        }
        else{
            res.status(403).json("No autorizado")
        }
    });
};



module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin};
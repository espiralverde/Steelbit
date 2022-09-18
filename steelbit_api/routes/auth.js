const router = require ("express").Router();
const User = require ("../models/User");
const CryptoJS = require ("crypto-js");
const jwt = require ("jsonwebtoken");

//Registro
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try
    {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser)
    
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

//Login

router.post("/login", async (req, res)=>{
    
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Error con las credenciales")

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        OriginalPassword !== req.body.password && res.status(401).json("Error con las credenciales");

        const accessToken = jwt.sign ({
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        {expiresIn: "3d"} //es el tiempo de expiración del token con el que se logueó       
        );

        const {password, ...others} = user._doc; //agregado para que no se vea el hash de la contraseña en la base de datos. A la vez que le agrego el ._doc para que tome de donde está alojado el verdadero usuario dentro de Mongo. Sino, duplica lo en la base.

        res.status(200). json({...others, accessToken});
    }
    catch (err) {
        res.status(500).json(err);
    }
    

})

module.exports = router;
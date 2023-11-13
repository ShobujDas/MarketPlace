// const { createToken, verifyToken } = require("../util/jwt");

// const register =(req,res)=>{
//     const {UserName,Email,Password,Img,Country,Phone,Desc,IsSeller} =req.body;
//     if(!UserName||!Email||!Password){
//         return res.status(400).json({error:"Please give require data"});
//     }

//     if (users.some(user => user.UserName === UserName)){
//         return res.status(400).json({error:"name is already taken"});
//     }
//     //Create new user
//     const newUser= {UserName,Email,Password,Img,Country,Phone,Desc,IsSeller};
//     users.push(newUser);

//     return res.status(201).send({massage:"name is already taken",
//     newUser:newUser
//      });
// }

// const login =(req,res)=>{
//     const {UserName,Email,Password} =req.body;
//     if(!UserName||!Email||!Password){
//         return res.status(400).json({error:"Please give require data"});
//     }

//     const user=users.find(user => user.UserName === UserName &&  user.Password === Password)
    
//     if(!user){
//         return res.status(401).json({error:"Invalid userName or Password"});
//     }
//     //Create new user
//     const newUser= {UserName,Email,Password,Img,Country,Phone,Desc,IsSeller};
//     users.push(newUser);

//     const token =createToken(newUser)
//     return res.status(201).send({massage:"name is already taken",
//     newUser:newUser,
//     tokenis :token
//      });
// }

// const logout =(req,res)=>{
//     // const {token}=req.body;
//     // if(!token){
//     //     return res.status(400).send({massage:"Give  token"}) ;
//     // }
//     // const user =verifyToken(token);

//     // if(!user){
//     //     return res.status(401).send({error:"Invalid userName or Password"});
//     // }
//     // const index =activetokens.



//     // we wil do it in frontend
//     return res.status(201).send({massage:"Logout succesfully"});
// }


const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
const auth = req.headers.authorization;
if(!auth){
  return res.status(401).send("Você não tem permissão para executar essa ação.");
};

const token = auth.split(" ")[1];

jwt.verify(token, process.env.SECRET, (err, decoded) => {
if(err){
 return res.status(401).send("Você não tem permissão para executar essa ação."); 
};
req.email = decoded.email;
});

next();
};
import jwt from "jsonwebtoken"

//user authentication middleware

const authUser = async (req,res,next) => {
try{
   
const {token} = req.headers
if(!token){
    return res.json({success:false,message:"not autherized login again"})
}
const token_decode = jwt.verify(token,process.env.JWT_SECRET)
req.body.userId = token_decode.id



// next()
// }catch(error){
// console.log(error);
// res.json({success:false,message:error.message})

// }
// }
// export default authUser



next();
} catch (error) {
  console.error(error);
  if (error.name === 'TokenExpiredError') {
    res.status(401).json({ success: false, message: 'Token expired. Please log in again.' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid token.' });
  }
}
};

export default authUser;








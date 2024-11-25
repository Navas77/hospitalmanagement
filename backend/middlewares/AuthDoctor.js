import jwt from "jsonwebtoken"

//Doctor authentication middleware

const authDoctor = async (req,res,next) => {
try{
   
const {dtoken} = req.headers
if(!dtoken){
    return res.json({success:false,message:"not autherized login again"})
}
const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)
req.body.docId = token_decode.id



next()
}catch(error){
console.log(error);
res.json({success:false,message:error.message})

}
}
export default authDoctor;



// next();
// } catch (error) {
//   console.error(error);
//   if (error.name === 'TokenExpiredError') {
//     res.status(401).json({ success: false, message: 'Token expired. Please log in again.' });
//   } else {
//     res.status(400).json({ success: false, message: 'Invalid token.' });
//   }
// }
// };

// export default authDoctor;






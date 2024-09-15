// First method for async handler
const asyncHandler = (fn) = async(req,res,next)=>{
    try{
        await fn(req,res,next)
    }
    catch(error){
        res.status(err.code|| 401).json({
            success:false,
            message:err.message
        })
    }
}

// Second method for async handler
// const asyncHandler =(requestHandler)=>{
//     (req,res,next)=>{
//         Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
//     }
// }
export default asyncHandler;
//Promise code used as a asyncHandler, its like a func, we don't have to write it again and again now, we can use it anywhere we want now, this code - 

const asyncHandler = (requestHandler)=>{
    return (req, res, next)=> {
        Promise.resolve(requestHandler(req,res, next)).
        catch((err) => next(err))
    }



}

export { asyncHandler }


//try catch way to write func of asynchHandler -

// const asyncHandler = (fn) => async (req,res,next)=>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
        
//     }
// }

const express = require("express")
const router = express.Router()
router.post('/foodData', (req, res)=>{
    try {
        console.log(global.food)
        res.send([global.food, global.foodCategory])
    } catch (error) {
        console.log("Server Error")
        
    }
})
module.exports = router;
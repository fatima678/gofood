const express = require("express")
const router = express.Router()
const  Order = require('../models/Orders')
router.post('/orderData', async (req, res) => {
    let data = req.body.order_data
    await data.splice(0,0,{Order_date:req.body.order_date})
    console.log("1231242343242354",req.body.email)

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email })    
    console.log(eId)
    if (eId===null) {
        try {
            console.log(data)
            console.log("1231242343242354",req.body.email)
            await Order.create({
                email: req.body.email,
                order_data:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
})
module.exports = router;

//6 october
// const express = require("express");
// const router = express.Router();
// const Order = require('../models/Orders'); // Ensure this path is correct

// router.post('/orderData', async (req, res) => {
//     const data = req.body.order_data;
//     const email = req.body.email;
    
//     // Add order date to order data
//     data.unshift({ Order_date: req.body.order_date }); // Changed from splice to unshift

//     console.log("Received email:", email);

//     try {
//         // Check if the email already exists in the database
//         let existingOrder = await Order.findOne({ email });

//         if (existingOrder === null) {
//             // If email does not exist, create a new order
//             await Order.create({
//                 email: email,
//                 order_data: [data] // Store data as an array
//             });
//             return res.status(201).json({ success: true }); // Created status
//         } else {
//             // If email exists, update the existing order
//             await Order.findOneAndUpdate(
//                 { email: email },
//                 { $push: { order_data: data } }, // Push new data to existing order
//                 { new: true } // Return the updated document
//             );
//             return res.status(200).json({ success: true }); // OK status
//         }
//     } catch (error) {
//         console.error("Error saving order:", error.message);
//         return res.status(500).send({ error: "Server Error", message: error.message });
//     }
// });

// module.exports = router;

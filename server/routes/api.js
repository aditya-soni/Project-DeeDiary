const express = require('express');
const router = express.Router();

// const {Entry} = require('../models/entry');

router.get('/',(req,res)=>{
    res.send('Api done')
});

// router.post('/entry',(req,res)=>{
//     var newEntry = new Entry({
//         title :req.body.title ,
//         date : new Date().getTime(),
//         content :req.body.content
//     });
//     newEntry.save().then(
//         (entry)=>{
//             res.status(201).json({
//                 message: 'Saved Succesfully',
//                 obj : entry
//             })
//         },
//         err => {
//             res,status(400).json({
//                 title : 'An error occured',
//                 error : err
//             })
//         }
//     )
// });
// router.get('/entry',(req,res)=>{
//     Entry.find().then(
//         (entries)=>{
//             res.status(200).json({
//                 message : 'Fetched succesfully',
//                 obj : entries
//             })
//         },
//         (err)=>{
//             res.status(400).json({
//                 title : 'Error occured',
//                 error : err
//             })
//         }
//     )
// })

module.exports = router;
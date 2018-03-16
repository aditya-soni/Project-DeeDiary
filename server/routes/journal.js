const express = require('express');
const router = express.Router();
const {Journal} = require('../models/journal');

// user view all journal
router.get('/',(req,res)=>{
    Journal.find().then(
        (journals)=>{
            res.status(200).json({
                message : 'Fetched Succesfully',
                obj : journals
            })
        },
        (err)=>{
            res.status(400).json({
                title: 'An error occured',
                error : err
            })
        }
    )
});

// create journal
router.post('/',(req,res)=>{
    var newJournal = new Journal({
        title : req.body.title,
        entries : req.body.entries
    });
    newJournal.save().then(
        (savedJournal)=>{
            res.status(201).json({
                message : 'Journal Succesfully created',
                obj : savedJournal
            });
        },
        (err)=>{
            res.status(400).json({
                title: 'An error occured',
                error: err
            });
        }
    )
});

// get journal by id
router.get('/:id',(req,res)=>{
    Journal.findById(req.params.id).then(
        (journal)=>{
            if(!journal){
                return res.status(404).json({
                    title : 'An error occured',
                    error: {message : "Couldn't find a journal"}
                })
            }
            res.status(200).json({
                message : "Succesfully found journal",
                obj : journal
            })
        },
        (err)=>{
            res.status(400).json({
                title: 'An error occured',
                error: err
            });
        }
    )
});

// add entry
router.post('/:id',(req,res)=>{
    var newEntry = {
        title:req.body.title,
        content:req.body.content,
        date: req.body.date
    };
    Journal.findById(req.params.id).then(
        (journal)=>{
            if(!journal){
                return res.status(404).json({
                    error: {message:'No journal found'}
                })
            }
            journal.entries.push(newEntry);
            journal.save().then(
                (journal)=>{
                    res.status(201).json({
                        message:'Saved!',
                        obj: journal
                    })
                },
                (err)=>{
                    res.status(400).json({
                        title : 'Something went wrong',
                        error:err
                    })
                }
            )

        },
        (err)=>{
            res.status(400).json({
                title : 'Something went wrong',
                error:err
            })
        }
    )
})

module.exports = router;
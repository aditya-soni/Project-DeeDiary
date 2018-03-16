const {mongoose} = require('../db/mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName : {
        type: String,
        required: true,
        trim : true,
        minlength: 2
    },
    lastName : {
        type : String,
        required:true,
        trim : true,
        minlength: 2
    },
    email : {
        type : String,
        required : true,
        trim: true,
        minlength: 3
    },
    password :{
        type: String,
        required: true,
        minlength :6
    },
    journals : [{
        type : Schema.Types.ObjectId, ref : 'Journal'
    }]
});

var User = mongoose.model('User',userSchema);

module.exports = {User};

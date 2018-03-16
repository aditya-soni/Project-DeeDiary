const {mongoose} = require('../db/mongoose');

var Schema = mongoose.Schema;

var journalSchema = new Schema({
    title:{
        type : String,
        minlength : 3,
        required : true
    },
    user_id : {
        type : Schema.Types.ObjectId, ref : 'User'
    },
    entries : [{
        title : {
            type:String,
            required:true
        },
        date : {
            type : String,
            required : true
        },
        content : {
            type: String,
            required : true
        }
    }]
});

var Journal = mongoose.model('Journal',journalSchema);

module.exports = {Journal};
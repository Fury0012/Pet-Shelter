const mongoose = require("mongoose")

const PetsSchema = new mongoose.Schema({

    PetName:{
        type: String,
        required: [true, "Title Name is require"],
        minlength: 3
        
    },

    PetType:{
        type: String,
        required: [true, "Content is required"],
        minlength: 3
    },

    PetDescription:{
        type: String,
        minlength: 3
    },
    Skill1:{
        type: String,
    },
    Skill2:{
        type: String,
    },
    Skill3:{
        type: String,
    },

    
    
}, {timestamps:true} )


const Pets = mongoose.model("Pets", PetsSchema);
module.exports = Pets;
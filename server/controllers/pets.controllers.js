const Pets = require("../models/pets.model")

module.exports = {
    createPet: (req, res) => {
        console.log("Received request body:", req.body); // Add this line for debugging
        Pets.create(req.body)
            .then((newPets) => res.json(newPets))
            .catch((err) => console.log(err));
    },
    
    getAllPets: (req,res) =>{
        Pets.find({})
            .then((allPets)=>{
                console.log(allPets);
                res.json(allPets)
            })
            .catch((err)=>console.log(err))
    },
    getOnePet: (req,res) =>{
        Pets.find ({_id: req.params.id})
            .then((onePet)=>{
                console.log(onePet);
                res.json(onePet)
            })
            .catch((err)=> console.log(err))
    },
    updatePet: (req,res)=>{
        Pets.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true, runValidators: true} 
        )
        .then((updatedPet)=>{
            console.log(updatedPet);
            res.json(updatedPet)
        })
        .catch((err)=> console.log(err) )
    },

    deletePet: (req,res)=>{
        Pets.deleteOne({_id: req.params.id})
        .then((deletedPet)=>{
            console.log(deletedPet);
            res.json(deletedPet)
        })
        .catch((err)=>console.log(err))
    }
    }
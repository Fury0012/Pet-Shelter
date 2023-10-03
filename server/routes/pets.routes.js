const PetController = require("../controllers/pets.controllers")

module.exports = (app) => {
    app.post("/pets",  PetController.createPet )
    app.get("/pets", PetController.getAllPets)
    app.get("/pets/:id", PetController.getOnePet)
    app.put("/pets/:id", PetController.updatePet)
    app.delete("/pets/:id", PetController.deletePet)
}


import { petModel } from "./models/Pet.js";

class PetManager{

    //Metodo Obtener Pets
    async getPets(){
        return await petModel.find({})
    }

    //Metodo Agregar Pet
    async addPet(pet){
        return await petModel.create(pet)
    }

    //Metodo Agregar Pets
    async createPets(pets){
        return await petModel.insertMany(pets)
    }
}


export const PetDaoMongoDB = new PetManager()



/* import petModel from "./models/Pet.js";

export default class Pet {

    get = (params) =>{
        return petModel.find(params)
    }

    getBy = (params) =>{
        return petModel.findOne(params);
    }

    save = (doc) =>{
        return petModel.create(doc);
    }

    update = (id,doc) =>{
        return petModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return petModel.findByIdAndDelete(id);
    }
} */
import { userModel } from "./models/User.js";

class UserManager{
    
    

    //Metodo Obtener users
    async getUsers(){
        return await userModel.find({})
    }

    //Metodo Agregar user
    async addUser(user){
        
        return  await userModel.create(user)
    }

    //Metodo Agregar users
    async createUsers(users){
        return await userModel.insertMany(users)
    }

    //Metodo Devuelve user por code
    async getUserByEmail(email){
        
        return await userModel.find({email})
    }

    //Metodo Actualizar Usuario
    async addCartToUser(userEmail, cartId){
        try {
            
            const user = await this.getUserByEmail(userEmail)
            console.log("DAO ADdCartToUser, USERL",user[0]);
            console.log("DAO ADdCartToUser, USER ID ",user[0]._id);
            
            const resp = await userModel.findByIdAndUpdate(user[0]._id, {cart:cartId}, {new: true});
            console.log("DAO RESP", resp);
            return resp
            
        } catch (error) {
            console.log(error);
        }
    }
}



export const UserDaoMongoDB = new UserManager()



/* import userModel from "./models/User.js";


export default class Users {
    
    get = (params) =>{
        return userModel.find(params);
    }

    getBy = (params) =>{
        return userModel.findOne(params);
    }

    save = (doc) =>{
        return userModel.create(doc);
    }

    update = (id,doc) =>{
        return userModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return userModel.findByIdAndDelete(id);
    }
} */
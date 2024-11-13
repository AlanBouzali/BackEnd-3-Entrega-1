import { UserDaoMongoDB } from "../dao/Users.dao.js";
import { PetDaoMongoDB } from "../dao/Pets.dao.js";

class MockServiceClass{

    async generateData(users, pets){
        const usersDB = await UserDaoMongoDB.createUsers(users)
        const petsDB = await PetDaoMongoDB.createPets(pets)
        return {
            usersDB,
            petsDB
        }
    }

    async getUsers(){
        return await UserDaoMongoDB.getUsers()
    }

    async getPets(){
        return await PetDaoMongoDB.getPets()
    }
}

export const MockService = new MockServiceClass
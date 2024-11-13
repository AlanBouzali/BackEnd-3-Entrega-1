//import Users from "../dao/Users.dao.js";
//import Pet from "../dao/Pets.dao.js";
import { UserDaoMongoDB } from "../dao/Users.dao.js";
import { PetDaoMongoDB } from "../dao/Pets.dao.js";
import Adoption from "../dao/Adoption.js";

import UserRepository from "../repository/UserRepository.js";
import PetRepository from "../repository/PetRepository.js";
import AdoptionRepository from "../repository/AdoptionRepository.js";

export const usersService = UserDaoMongoDB//new UserRepository(new Users());
export const petsService = PetDaoMongoDB//new PetRepository(new Pet());
export const adoptionsService = new AdoptionRepository(new Adoption());

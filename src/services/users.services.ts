import User from "~/models/schemas/User.schema";
import databaseService from "./database.services";

class UserService {
    async register(payload : {email: string, password: string}) {
        const {email, password} = payload
        const result = await databaseService.users.insertOne(new User({
            email,
            password
        }))
        return result
    }

    async getUser() {
        const result = await databaseService.users.find().toArray()
        return result
    }

    async getUserDetail(id: number) {
        const result = await databaseService.users.findOne({id})
        return result
    }
}

const userService = new UserService

export default userService
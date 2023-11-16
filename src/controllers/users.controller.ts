import User from "~/models/schemas/User.schema"
import databaseService from "~/services/database.services"
import userService from "~/services/users.services"

export const loginController = (req:any, res:any) => {
    const {email, password} = req.body
    if(email === "datnguyen@gmail.com" && password === "123123") {
        res.status(202).json({
            message: 'login susscess',
        })
    }
    return res.status(400).json({
        error: "Login failed"
    })
}

export const registerController = async (req:any, res:any) => {
    const {email, password} = req.body
    try {
        const result = await userService.register({email, password})
    
        return res.status(200).json({
            success: "register success",
            result
        })
    }catch(error) {
        return res.status(400).json({
            error: "register failed"
        })
    }
    
}

export const usersController = async (req:any, res:any) => {
    try {
        const result = await userService.getUser()
    
        return res.status(200).json({
            message: 'success',
            result
        })
    }catch(error) {
        return res.status(400).json({
            error: "register failed"
        })
    }
}

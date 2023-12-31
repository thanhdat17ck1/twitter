import { checkSchema } from "express-validator"
import { validate } from "~/utils/validation"

export const loginValidator = (req:any, res:any, next:any) => {
    const {email, password} = req.body
    if(!email || !password) {
        return res.status(400).json({
            error: 'Missing email or password'
        })
    }
    next()
}

export const registerValidator = validate(checkSchema({
    name: {
        notEmpty: true,
        isString: true,
        isLength: {
            options: {
                min: 1,
                max: 100
            }
        },
        trim: true
    },
    email: {
        notEmpty: true,
        isEmail: true,
        trim: true
    },
    password: {
        notEmpty: true,
        isString: true,
        isLength: {
            options: {
                min: 6,
                max: 50
            }
        },
        isStrongPassword: {
            options: {
                minLength: 6,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
            }
        }
    },
    confirm_password: {
        notEmpty: true,
        isString: true,
        isLength: {
            options: {
                min: 6,
                max: 50
            }
        },
        isStrongPassword: {
            options: {
                minLength: 6,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
            }
        }
    },
    date_of_birth: {
        isISO8601: {
            options: {
                strict: true,
                strictSeparator: true
            }
        }
    }
}))
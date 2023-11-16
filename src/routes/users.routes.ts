import { Router} from 'express'
import { loginController, registerController, usersController } from '~/controllers/users.controller'
import { loginValidator } from '~/middlewares/users.middlewares'
const userRouter = Router();


// define the about route
userRouter.get('/users', usersController)
userRouter.post('/login', loginValidator, loginController)
userRouter.post('/register', registerController)


export default userRouter
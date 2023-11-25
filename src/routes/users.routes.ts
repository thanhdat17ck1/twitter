import { Router} from 'express'
import { loginController, registerController, usersController, userDetailController } from '~/controllers/users.controller'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
const userRouter = Router();


// define the about route
userRouter.get('/getuser', usersController)
userRouter.get('/getuser/:id', userDetailController)
userRouter.post('/login', loginValidator, loginController)
userRouter.post('/register', registerValidator ,registerController)


export default userRouter
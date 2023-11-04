import { Router} from 'express'
const usserRouter = Router();

usserRouter.use(
    (req:any, res:any, next:any) => {
    console.log('Time 1: ', Date.now())
    next()
    },
    (req:any, res:any, next:any) => {
        console.log('Time 2: ', Date.now())
        next()
    },
)
  // define the home page route
  usserRouter.get('/', (req:any, res:any) => {
    res.send('Birds home page')
  })
  // define the about route
  usserRouter.get('/about', (req:any, res:any) => {
    res.json({
      data: [
        {
          id: 1,
          text: 'hello'
        }
      ]
    })
  })

  export default usserRouter
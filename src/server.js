// Requerir módulos 
import express from 'express'
import cloudinary from 'cloudinary'
import fileupload from 'express-fileupload'
import dotenv from 'dotenv';


import routerTour from './routers/tour_routes.js'
import routerUser from './routers/user_routes.js'


// Inicializaciones
const app = express()

cloudinary.config({ 
    cloud_name: 'demo-web', 
    api_key: '123', 
    api_secret: '456'
  });

// Variables 
app.set('port', process.env.puertito || 3000)



// Middlewares
app.use(express.json())


// Rutas 
app.get('/',(req,res)=>{
    res.send("Server on")
})

// Rutas - Tour
app.use('/api',routerTour)

// Rutas - Users
app.use('/api',routerUser)


// Exportar la variable app 
export default app




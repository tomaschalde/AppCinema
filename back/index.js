
const app = require('./src/server');


const dbConnection = require('./src/config/dbConnection');


require('dotenv').config();
const PORT = process.env.PORT;



    dbConnection().then((res) =>{

        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
    
    })
    .catch((error) => {
        console.log('Error al conectar la Base de Datos');
    })
    



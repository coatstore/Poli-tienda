const sqlserver = require('mssql')


//los datos de conexion
const dbConfig = {
    user : 'admincoat',
    password :'1234coat',
    server : 'localhost',
    database: 'CoatStore',
    options : {
        encrypt : false,
        trustServerCertificate: true
    }
}


const conexion = async()=> {

      try {
      const pool = await sqlserver.connect(dbConfig)
      return pool
    } catch (error) {
      console.error ('error en la conexion: ', error)
    }
}
module.exports = conexion
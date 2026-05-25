const sqlserver = requier('mssql')


//los datos de conexion
const dbConfiug = {
    user : 'admincoat',
    password :'1234coat',
    server : 'localhost\SQLEXPRESS',
    database: 'CoatStore',
    options : {
        encrypt : false,
        trustServerCertificate: true
    }
}


const conexion = async()=> {

      try {
      const pool = await sqlServer.connect(dbConfig)
      return pool
    } catch (error) {
      console.log ('error en la conexion: ', error)
    }
}
module.exports = conexion 
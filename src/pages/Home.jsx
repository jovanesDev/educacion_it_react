import React, { useContext, useEffect } from 'react'
import Card from '../components/Card/Card'
import { productos } from '../config'
import { UserContext } from '../context/UserGlobal'

const Home = () => {

  const {permitido,handlePermitir,handleNoPermitir} = useContext(UserContext)

  useEffect(() => {

  }, [permitido])


  const data = {
    name:'Hovha',
    apellido:'Petrosyan',
    profesion:'Docente'
  }

  // const task = new Promise ((resolve,reject) => {

  //   // Brake hasta 20:35;

  //   setTimeout(() => {
  //     resolve({
  //       error: 'No pude resolver '
  //     })
  //     throw Error 
  //   },2000)

  // })

  // task.then((res) => console.log(res)).catch((err) => {throw err}).finally(() => console.log('la promesa finalizo'))

  //  => sirve para obtener informacion y no tiene cuerpo , osea no tiene body 
  // hacia a la url de banco frances => Leandro Martini => // 
  // POST 
  // PUT => en caso de que no existe crearia la informacio y en caso de que si existe lo reemplazaria completo por uno nuevo 
  // PATCH => actualizacion parcial => 
  // DELETE => Borrar una informacion 

   // METODOS y LA COMUNICACION Tiene Cuerp y Cabeza 

   // resigros: // registro 
   // - mail 
   // - password 
   // - nombre
   // - apellido  

   // => Base de Datos { id:asjkldhasjgjas, ...registro}

   // GET => URL : https://bbva.com/login/username='hova2244'&password='patitoNegroSol'

    // Login 
   // Authenticacion => email y password => servidor => busca un usuario con el email && password 
   // rejected => seguir intentando ! (algo estas mandando mal) 
   // resolve => resgistro => hashea! => token => localstorage 

  // GET => sirve para obtener informacion y no tiene cuerpo , osea no tiene body 
  // hacia a la url de banco frances => Leandro Martini => //

  // POST:
  // y cabeza 
  // y cuerpo 

  useEffect(() => {

    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(json => console.log(json,'respuesta de la peticion'))
    //   .catch((err) => {throw err})

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        userName:'Hova2255',
        pass:'TecladoNistua60',
        userId:5
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    

  }, [])

//userId: 1,
// id: 1,
// title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// body: "quia et suscipit
// suscipit recusandae consequuntur expedita et cum
// reprehenderit molestiae ut ut quas totam
// nostrum rerum est autem sunt rem eveniet architecto"
  


  return (
    <>
        <h1>Home</h1>
        <div className='container my-5'>
        <h3> Accesso a InfoSecreta {permitido ? 'Habilitado' : 'Inhabilitado'} </h3>
        <button 
          className='my-2'
          onClick={permitido ? handleNoPermitir : handlePermitir}
        >
            {permitido ? 'Prohibir el Accesso' : 'Habilitar el Accesso'}
        </button>
        </div>

    {
      productos.map(({nombre,precio,descripcion,id},index) => (
        <Card 
        nombre={nombre} 
        precio={precio} 
        descripcion={descripcion} 
        id={id}
        key={index}
        />
      ))
    }
    </>

  )
}

export default Home
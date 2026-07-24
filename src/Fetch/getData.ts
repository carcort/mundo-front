

export const getData = async({token, ruta1})=>{

  
 const ruta = `http://localhost:3000/${ruta1}`
   const data = await fetch(ruta , {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
   const desjson = data.json()
   return desjson

}
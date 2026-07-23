

export const getData = async()=>{
 const ruta = 'http://localhost:3000'
   const data = await fetch(ruta)
   const desjson = data.json()
   return desjson

}

export const deleteData = async({ruta1, token, id})=>{

 console.log('ruta1', ruta1);
 console.log('token', token);
 console.log('id', id);
 
 
 
   const ruta = `http://localhost:3000/${ruta1}/${id}` 
   const response = await fetch(ruta, {
        method: 'DELETE',
        headers: {
          
          'Authorization': `Bearer ${token}` 
        },
        //body: JSON.stringify(data), // Converts JavaScript object to JSON string
      });
      return response
}
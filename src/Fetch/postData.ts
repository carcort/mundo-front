


export const postData = async({ruta1, data, token})=>{

 console.log(data);
 
   const ruta = `http://localhost:3000/${ruta1}` 
   const response = await fetch(ruta, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(data), // Converts JavaScript object to JSON string
      });
      return response
}



export const postData = async({data})=>{

 console.log(data);
 
   const ruta = 'http://localhost:3000' 
   const response = await fetch(ruta, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Alerts the server to expect JSON data
        },
        body: JSON.stringify(data), // Converts JavaScript object to JSON string
      });
      return response
}
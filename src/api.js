import { json } from "react-router-dom"

export  async function getVan(id){
   const api= id? `/api/vans/${id}` : "/api/vans"
 const res= await fetch(api)
 if(!res.ok){
    throw{
        message:"Failed to fetch vans",
        statusText:res.statusText,
        status:res.status
    }
 }
 const data=  await res.json()
 return data.vans
}

export async function gethostVans(id){
 const api= id? `/api/host/vans/${id}` : "/api/host/vans"

 const res= await fetch(api)
 if(!res.ok){
    throw{
        message:"Failed to fetch vans",
        statusText:res.statusText,
        status:res.status
    }
 }
 const data =  await res.json()
 return data.vans
}

export async function loginUser(creed){
   const res = await fetch("/api/login", {
      method:"post", body:JSON.stringify(creed)
   })
   const data=  await res.json()
   if(!res.ok){
      throw{
          message:data.message,
          statusText:res.statusText,
          status:res.status
      }
   }

   return data
}
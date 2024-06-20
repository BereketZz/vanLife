import { redirect } from "react-router-dom"


export async function requiredAuth(){
    const isLoged= false

    if(!isLoged){
     throw redirect("/login")
    }


}
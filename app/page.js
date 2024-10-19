"use client"
import { useContext } from "react"
import{UserContext} from "@/contexts/UserProvider"

export default function Home(){
  const {user}=useContext(UserContext)
  return(
    <div>
      home
      User.{user?.userName}
    </div>
  );
}
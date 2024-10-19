"use client"
import react,{createContext,useEffect,useState} from 'react'
import { getUserByToken } from '@/backend_fake/be';
import { useRouter } from 'next/navigation';
const UserContext = createContext(null);
function UserProvider({ children}){
    const router =useRouter()
    const {user}
}

export default UserProvider
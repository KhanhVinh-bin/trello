// import React from 'react'
// import react, { useState } from 'react'
// import { login } from '@/backend_fake/be'

// function Loginpage() {
//   const router = useRouter()
//   const [state, setState] = useState({
//     username: "",
//     password: ""
//   })
//   // const user,password
//   function handlelogin() {

//     const { username, password } = state
//     const res = login(username, password)
//     if (res.success) {
//       localStorage.setItem("token", res.token)
//       Router.push("/")
//     } else {
//       console.log(res.message)
//     }
//   }
//   //if(usernamep=="user1"&&password=="1234")
//   //console.log("get out")
//   //else{
//   //console.log("sai mat khau")

// }

//   return (
//     <div classname='w-96 mx-auto py-10'>
//       <p> Username</p>
//       <input onchange={(e) => {
//         setState({
//           ...state,
//           password: e.target.value
//         })
//       }} />
//       <input class='border' />
//       Password
//       <input type='password' classname='border h-10 w-full' />
//       <div>
//         <button classname='border rouded-lg bg-black text-white py-2'>
//           login
//         </button>
//       </div>
//       )
// }

//       export default Loginpage

import React from 'react'
import { login } from '@/backend_fake/be'

function Loginpage() {
  const router = useRouter()
  const [state, setState] = useState({
    username: "",
    password: ""
  })
  function handlelogin() {

    const { username, password } = state
    const res = login(username, password)
    if (res.success) {
      localStorage.setItem("token", res.token)
      Router.push("/")
    } else {
      console.log(res.message)
    }
  }

  return (
    <div classname='w-96 mx-auto py-10'>
      <p> Username</p>
      <input onchange={(e) => {
        setState({
          ...state,
          password: e.target.value
        })
      }} />
      <input class='border' />
      Password
      <input type='password' classname='border h-10 w-full' />
      <div>
        <button onClick={handlelogin}
          classname='border rouded-lg bg-black text-white py-2'>
          login
        </button>
      </div>
    </div>
  )
}

export default Loginpage
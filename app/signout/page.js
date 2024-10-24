"use client"
 
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
 
import { useRouter } from 'next/navigation'
const signout = () => {
    const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signout()}>Sign out</button>
    </>
  }
  }


export default signOut

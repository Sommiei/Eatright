
import React from 'react'
import { UseAuth } from '../../Contexts/AuthContext'

export const Home = () => {
    const { currentUser } = UseAuth()
    return (
        <div className='text-2xl font-bold pt-14'>
            <h1>Home Page</h1>
            <h2>Welcome {currentUser.name ? currentUser.name:currentUser.email},you are now logged in</h2>
            <img src="" alt="" />
        </div>

  )
}

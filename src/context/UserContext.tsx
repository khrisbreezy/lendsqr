import React, {createContext, useContext, useEffect, useState} from 'react'
import {  Props, UserInterface } from '../../utils/types'


const UserContext= createContext<any>(null)

export const useUserContext=()=>useContext(UserContext)

export function UserProvider({children}:Props){
    const [usersState, setUsersState]=useState({
        users: []
    })
    const value:UserInterface={
        usersState,
        setUsersState
    }

    React.useEffect(() => {
        fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
      .then(response => response.json())
      .then(async data => {
          setUsersState(data)
      })
      .catch(error => console.log(error));
    }, [])
    
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}
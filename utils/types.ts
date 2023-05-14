import { ReactNode } from "react";

export interface Props{
    children: ReactNode;
}

export interface UserInterface{
    usersState:any,
    setUsersState:React.Dispatch<React.SetStateAction<any>>,
}
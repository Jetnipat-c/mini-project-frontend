import create from 'zustand'
import { StoreUser } from './types/user.type'

export const UserStore = create<StoreUser>((set,get) => ({
    username: '',
    token: '',
    id: 0,
    setUsername: (usernames: string) => {
        set(() => ({username: usernames}
        ))
    },
    setToken: (tokens : string) => {
        console.log(tokens)
        set(() => ({token: tokens}
        ))
    },
    setId: (ids : number) => {
        console.log(ids)
        set(() => ({id: ids}
        ))
    }
    
}))
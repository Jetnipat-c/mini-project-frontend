import create from 'zustand'

type UserState = {
    username: string;
    setUername: (username: string) => void;
}

export const UserStore = create<any>((set,get) => ({
    username: '',
    token: '',
    setUsername: (usernames: string) => {
        set(() => ({username: usernames}
        ))
    },
    setToken: (tokens : string) => {
        console.log(tokens)
        set(() => ({token: tokens}
        ))
    
    }

    
}))
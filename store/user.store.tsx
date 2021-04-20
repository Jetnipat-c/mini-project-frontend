import create from 'zustand'

type UserState = {
    username: string;
    setUername: (username: string) => void;
}

export const UserStore = create<any>((set,get) => ({
    username: '',

    setUsername: (username) => {
        set(() => ({username: username}
        ))
    }

    
}))
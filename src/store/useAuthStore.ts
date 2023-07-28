import { create } from "zustand"
import { persist } from "zustand/middleware"

type State = {
    token: string
    profile: User
}

type Actions = {
    setToken: (token: string) => void,
    setProfile: (data: User) => void
}

type User = {
    id:        number | null;
    username:  string;
    email:     string;
    // firstName: string;
    // lastName:  string;
    // gender:    string;
    image:     string;
    // token:     string;
    iat: number,
    exp: number
}

export const useAuthStore = create(persist<State & Actions>(
    (set) => (
        {
            token: "",
            profile: {
                id: null,
                username: '',
                email: '',
                // firstName: '',
                // lastName: '',
                // gender: '',
                image: '',
                // token: '',
                iat: 0,
                exp: 0
            },
            setToken: (token: string) => set(state => ({...state, token})),
            setProfile: (data: User) => set(state => ({...state, profile: data}))
        }
    ),
    {
        name: 'auth'
    }
)) 
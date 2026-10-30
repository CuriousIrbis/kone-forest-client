import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface IUser{
    name: string
    lastName: string
    setName: (newName: string) => void
    setLastname: (newLastname: string) => void
}

const useUser = create<IUser>()(
    persist(
        (set) => ({
            name: 'Alex',
            lastName: 'Abramov',
            setName: (newName) => set(() => ({name: newName})),
            setLastname: (newLastname) => set(() => ({lastName: newLastname}))
        }),
        {
            name: 'user-storage',
        }
    )
)

export default useUser;
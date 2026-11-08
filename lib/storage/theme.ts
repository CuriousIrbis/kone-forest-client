import {create} from 'zustand';
import {persist} from 'zustand/middleware'

type TMode = 'light' | 'dark'

interface IThemeState{
    mode: TMode
    toggleTheme: () => void
}

const useTheme = create<IThemeState>()(
    persist(
        (set) => ({
            mode: 'light',
            
            toggleTheme: () => 
                set((state) => {
                    const nextTheme = state.mode === 'light' ? 'dark' : 'light'
                    updateDOMTheme(nextTheme)
                    return {mode: nextTheme}
                })
        }),
        {
            name: 'theme-storage'
        }
    )
)

function updateDOMTheme(theme: 'dark' | 'light'){
    if(typeof window !== 'undefined'){
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
}

export default useTheme;
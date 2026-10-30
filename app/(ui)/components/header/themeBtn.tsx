import Image from 'next/image';

type TMode = 'light' | 'dark'

interface IThemeBtn{
    state: TMode
    toggleTheme: (mode: TMode) => void
}

export default function themeButton({state, toggleTheme}: IThemeBtn){
    return (
        <button 
            onClick={() => toggleTheme(state)}
            className=''
        >
            {state == 'light' ? '☀️' : '🌕'}
        </button>
    )
}
interface IInput1{
    params: Array<string> | Array<number>
}

export default function Input1({params}: IInput1){
    if(params.every(item => typeof item === 'string')){
        return (
            // это локация
            <div className="flex flex-col">
                <select>
                    {params.map((location: string, index: number) => (
                        <option value="" key={index}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>
            
        )
    } else {
        // это число гостей
        return (
            <div className="flex flex-col">
                <select>
                    {params.map((guests: number, index: number) => (
                        <option value="" key={index}>
                            {guests}
                        </option>
                    ))}
                </select>                
            </div>

        )
    }
    

}
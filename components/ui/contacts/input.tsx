interface IContactsProps{
    title: string
    defaultValue?: string
    type: 'name' | 'surname' | 'email' | 'message' | 'topic'
    isSelect: boolean
}



export default function ContactsInput(props: IContactsProps){

    return(
        <div className="flex flex-col">
            <label>{props.title}</label>
            {props.type == 'email' ? (
                <input type="email" placeholder={props.defaultValue}/>
            ) : props.type == 'topic' ? (
                <select>
                    <option value="booking_question">Вопрос о бронировании</option>
                    <option value="adding_chalet">Хочу добавить шале</option>
                    <option value="rescheduling_canceling">Отмена или перенос</option>
                    <option value="other">Другое</option>
                </select>
            ) : props.type == 'message' ? (
                <textarea name="" id="" placeholder={props.defaultValue}></textarea>
            ) : (
                <input type="text" name="" id="" placeholder={props.defaultValue}/>
            )}
        </div>
    )
}
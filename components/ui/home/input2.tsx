'use client'

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { IMaskInput } from "react-imask";


interface IInputForm<T extends FieldValues> {
  name: Path<T>;                // Имя поля в форме
  control: Control<T>;          // Объект control из useForm
  minDate?: Date;                          // Динамическое ограничение СНИЗУ
  maxDate?: Date;                          // Динамическое ограничение СВЕРХУ
}

const parseToDate = (dateStr: string): Date | null => {
  if (!dateStr || dateStr.includes('_')) return null;
  const [day, month, year] = dateStr.split('.');
  const parsed = new Date(Number(year), Number(month) - 1, Number(day));
  return isNaN(parsed.getTime()) ? null : parsed;
};

const formatDateToString = (date: Date | null | undefined): string => {
  if (!date) return '';
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return `${d}.${m}.${y}`;
};

export default function Input2<T extends FieldValues>({name, control, minDate, maxDate}: IInputForm<T>){

    return (
        <Controller 
            name={name}
            control={control}

            render={({field: {onChange, value}}) => (
                <IMaskInput 
                    mask={Date}
                    pattern="d.m.Y"

                    lazy={false}

                    min={minDate}
                    max={maxDate}

                    format={(d: null | undefined | Date) => formatDateToString(d)}
                    parse={(str: string) => parseToDate(str) as Date}

                    value={value||''}

                    onAccept={(unmaskedValue: string) => {
                        onChange(unmaskedValue)
                    }}

                    autofix
                />
            )}
        />
    )
}
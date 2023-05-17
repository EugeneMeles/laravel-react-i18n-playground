import { SelectHTMLAttributes } from 'react';

interface SelectInterface<T> extends SelectHTMLAttributes<T> {
  options: {value: string, label: string}[]
}

export default function Select({ options = [], ...props }: SelectInterface<HTMLSelectElement>) {
    return (
        <select
            {...props}
            className={
                'rounded border-gray-300 shadow-sm focus:ring-indigo-500 ' +
                props?.className
            }
        >
            {options.map(({value, label}, key) => <option key={key} value={value}>{label}</option>)}
        </select>
    )
}

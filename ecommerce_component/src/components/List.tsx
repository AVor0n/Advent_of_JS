import { FC } from 'react'
type PropsOfType<O, T> = keyof O extends infer P
    ? P extends keyof O & string
        ? O[P] extends T
            ? P
            : O[P] extends object
                ? `${P}.${PropsOfType<O[P], T>}`
                : never
        : never
    : never

type ListProps<T extends Record<string, unknown>> = {
    cls: string | string[],
    data: T[],
    item: FC<T>,
    keyProp: PropsOfType<T, string>,
}

export const List = <T extends Record<string, unknown>>({ cls, data, item, keyProp }: ListProps<T>) => {
    const Item = item;
    return (
        <ul className={Array.isArray(cls) ? cls.join(' ') : cls}>
            {data.map(it => (
                <li key={it[keyProp] as string}>
                    <Item {...it}/>
                </li>
            ))}
        </ul>
    )
}

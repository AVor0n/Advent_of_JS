import { FC, PropsWithChildren } from 'react'

type PanelProps = PropsWithChildren<{
    title: string,
}>

export const Panel: FC<PanelProps> = ({ title, children }) => {
    return (
        <div className="panel">
            <h1>{title}</h1>
            {children}
        </div>
    )
}

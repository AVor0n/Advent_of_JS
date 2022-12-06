import { FC } from 'react';
import { Item } from '../appData';
import { Card } from './Card';
import { List } from './List';
import { Panel } from './Panel';

type MenuProps = {
    data: Item[]
}

export const Menu: FC<MenuProps> = ({ data }) => {
    return (
        <Panel title='To Go Menu'>
            <List cls='menu' data={data} item={Card} keyProp={'name'}/>
        </Panel>
    )
}

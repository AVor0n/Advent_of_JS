import { FC } from 'react';
import { Item } from '../../itemsData';
import { Card } from '../components/Card';
import { List } from '../components/List';
import { Panel } from '../components/Panel';

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

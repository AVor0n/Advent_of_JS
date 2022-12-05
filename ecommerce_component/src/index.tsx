import { createRoot } from 'react-dom/client';
import { menuItems } from '../itemsData';
import { Menu } from './pages/main';

const root = createRoot(document.querySelector('.wrapper.menu')!);
root.render(<Menu data={menuItems} />);

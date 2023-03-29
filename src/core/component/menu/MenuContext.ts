import { createContext } from 'react';

export type MenuContextValueType = {
	isOpen: boolean;
	onMenuClick: (state: boolean) => void;
};

const MenuContext = createContext<MenuContextValueType>(
	{} as MenuContextValueType
);

export default MenuContext;
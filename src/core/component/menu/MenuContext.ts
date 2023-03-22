import { createContext } from 'react';

export type MenuContextValueType = {
	isOpen: boolean;
	onMenuButtonClick: () => void;
};

const MenuContext = createContext<MenuContextValueType>(
	{} as MenuContextValueType
);

export default MenuContext;
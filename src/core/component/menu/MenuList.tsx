
import { FC, useContext } from "react";

import type { ContainerProps } from "_types/props";
import MenuContext from "./MenuContext";

const MenuList: FC<ContainerProps> = ({ children, classNames}) => {
    const { isOpen } = useContext(MenuContext);

    return (  
        <>
            {
                isOpen && (
                    <div className="menu-list">
                        {children}
                    </div>
                )
            }
        </>
    );
}

export default MenuList;
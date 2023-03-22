
import { ButtonProps } from "_types/props";
import Button from "@component/button";
import clsx from "@utils/clsx";

function MenuItem({ children, classNames = '', onClick }: ButtonProps) {
    return (  
        <div className={clsx(classNames, 'menu-item')}>
            <Button onClick={onClick}>
                {children}
            </Button>
        </div>
    );
}

export default MenuItem;
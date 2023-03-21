import type { ContainerProps } from '_types/props';
import clsx from '@utils/clsx';

function Footer({ children, classNames = ''}: ContainerProps) {
    return (  
        <footer className={clsx(classNames)}>
            {children}
        </footer>
    );
}

export default Footer;
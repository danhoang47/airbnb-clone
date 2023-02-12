import { ReactNode } from 'react';
import { BoxStyleSize } from '@shared/types';
import { cx } from '@shared/utils';
import './Container.scss';

type Container = {
    size?: BoxStyleSize
    children?: ReactNode
}

function Container({ size = 'md', children }: Container) {
    return (  
        <div className={cx(['container', size])}>
            {children}
        </div>
    );
}

export default Container;
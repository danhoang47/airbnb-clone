import { ReactNode } from "react";
import './Grid.scss'

type GridProps = {
    children?: ReactNode
}

function Grid({ children }: GridProps) {
    return (  
        <div className="grid">
            {children}
        </div>
    );
}

export default Grid;
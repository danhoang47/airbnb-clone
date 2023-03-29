import { createContext } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Category = {
    id: number,
    title: string,
    icon: IconProp
}

const CategoryContext = createContext<Category | undefined>(undefined);

export default CategoryContext;
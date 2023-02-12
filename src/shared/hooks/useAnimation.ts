import { useRef } from 'react';

export default function useAnimation<E extends HTMLElement>() {
    const elementRef = useRef<E>(null);

    return [elementRef];
}

/* 
    generics constraints
    keyof returns union type of its keys
    as const: 
        object to readonly
        array to tuple
    typeof Value returns Type of its value

    const tabs = ['cat', 'dog', 'moust'] as const
    type Tab = typeof tabs[number] => 'cat' | 'dog' | 'mouse'
*/
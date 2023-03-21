
export default function clsx(className: string | string[]) {
    if (className instanceof Array) {
        return className.join(' ');
    } 
    
    return className;
}
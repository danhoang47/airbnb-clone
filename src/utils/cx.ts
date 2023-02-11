
type ClassNameObject = {
    readonly [className: string]: boolean
}

export default function cx(classes: (string | ClassNameObject)[], styles: CSSModuleClasses) {
    return classes.map((clss) => {
        if (typeof clss === 'string') {
            return styles[clss];
        } else {
            const clssKey = Object.keys(clss).join('');
            return clss[clssKey] ? styles[clssKey] : '' 
        }
    }).join(' ');
}

/**
 * [styles['button']]
 * 
 */
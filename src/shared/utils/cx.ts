type ClassNameObject = {
    readonly [className: string]: boolean;
};

export default function cx(
    classes: (string | ClassNameObject)[],
    styles?: CSSModuleClasses
) {
    if (styles) {
        return classes
        .reduce<string[]>((prev, clss) => {
            if (typeof clss === "string") {
                return [...prev, styles[clss]];
            } else {
                return [
                    ...prev,
                    ...Object.keys(clss)
                        .filter((key) => clss[key])
                        .map((key) => styles[key]),
                ];
            }
        }, [])
        .join(" ")
        .trim();
    } else {
        return classes.join(' ').trim();
    }
}

/**
 * [styles['button']]
 *
 */

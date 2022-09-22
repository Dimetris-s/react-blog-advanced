type Mods = Record<string, boolean | string>

export const classNames = (
    className: string,
    optional: Mods = {},
    additional: string[] = [],
): string => [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(optional).filter(([, bool]) => Boolean(bool)).map(([className]) => className),
].join(' ');

type Mods = Record<string, boolean | string>

export const classNames = (className:string, optional: Mods = {}, additional: string[] = []):string => {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(optional).filter(([, bool]) => Boolean(bool)).map(([className]) => className)
  ].join(' ')
}

// type Argument = string | string[] | Record<string, boolean | string>
//
// function cn(...args: Argument[]):string {
//   const classes: string[] = []
//   for(let i = 0; i < args.length; i++) {
//     const argument = args[i]
//     const argType = typeof argument
//     if(argType === 'string' || argType === 'number') {
//       classes.push(argument.toString())
//     } else if(Array.isArray(argument)) {
//       if(argument.length) {
//         const classesStrings = cn.apply(null, argument)
//         classes.push(classesStrings)
//       }
//     } else if(argType === 'object') {
//       Object.entries(argument).forEach(([cls, bool]) => {if(Boolean(bool)) classes.push(cls)})
//     }
//   }
//   return classes.join(' ')
// }
//

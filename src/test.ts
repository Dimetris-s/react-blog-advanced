export const someFn = (num: number): string => {
  console.log(num, 'hello');
  throw Error('error')
  return 'hello'
}

export function compose(...fs) {
    return (arg) => fs.reduce((acc, f) => f(acc), arg);
}

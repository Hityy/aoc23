export function pipec(...fs) {
    return (arg) => fs.reduce((prev, f) => f(prev), arg);
}

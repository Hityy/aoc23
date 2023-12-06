export function pipe(a, ...fs) {
    return fs.reduce((prev, el) => el(prev), a);
}

export function parseUri(path: string) {
  return path
    .split('/')
    .map((path) => path.replace(/\//g, ''))
    .filter((path) => !!path)
    .join('/');
}

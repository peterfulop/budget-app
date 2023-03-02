export enum Routes {
  HOME = '/',
  NOT_FOUND = '/*',
}

export default interface IRoute {
  path: string;
  name: string;
  component: any;
}

import 'reflect-metadata';
import express from 'express';
import { parseUri } from './uri';

interface Controller {
  routePrefix?: string;
}

export const router = express.Router();

export function controller(options?: Controller): Function;
export function controller(
  routePrefix?: string,
  options?: Controller
): Function;

export function controller(
  routePrefixOrOptions?: string | Controller,
  maybeOptions?: Controller
): Function {
  return function (target: Function) {
    const options =
      (typeof routePrefixOrOptions === 'object'
        ? (routePrefixOrOptions as Controller)
        : maybeOptions) || {};
    const prefix =
      typeof routePrefixOrOptions === 'string'
        ? routePrefixOrOptions
        : options.routePrefix ?? '';

    for (const key of Object.getOwnPropertyNames(target.prototype)) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata('path', target.prototype, key);
      if (path) {
        console.log(parseUri(`${prefix}${path}`));

        router.get(`/${parseUri(`${prefix}${path}`)}`, routeHandler);
      }
    }
  };
}

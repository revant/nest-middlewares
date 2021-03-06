import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
import * as serveFavicon from 'serve-favicon';

@Injectable()
export class ServeFaviconMiddleware implements NestMiddleware {

    public static configure(path: string, opts?: ServeFaviconOptions) {
        this.path = path;
        this.options = opts;
    }

    private static path: string;
    private static options: ServeFaviconOptions;

    public resolve(...args: any[]): RequestHandler {
        if (ServeFaviconMiddleware.path) {
            return serveFavicon(ServeFaviconMiddleware.path, ServeFaviconMiddleware.options);
        } else {
            throw new Error('ServeFaviconMiddleware requires a path in configure.');
        }
    }
}

export interface ServeFaviconOptions {
    maxAge?: number;
}

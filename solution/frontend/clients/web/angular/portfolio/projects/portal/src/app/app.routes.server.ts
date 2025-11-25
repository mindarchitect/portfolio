import {RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    {
        path: '', // This renders the "/" route on the client (CSR)
        renderMode: RenderMode.Client,
    },
    {
        path: 'home',
        renderMode: RenderMode.Client
    },
    {
        path: 'project-list',
        renderMode: RenderMode.Server
    },
    {
        path: '**',
        renderMode: RenderMode.Prerender
    }
];

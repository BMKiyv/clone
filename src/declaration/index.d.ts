import { AriaAttributes, DOMAttributes } from "react";

 declare module 'react' {
     export interface HTMLAttributes<T> extends AriaAttributes<T>, DOMAttributes<T> {
        alt?: string;
        download?: unknown;
        href?: string;
        hrefLang?: string;
        media?: string;
        rel?: string;
        ref?: string;
        target?: string;
        type?: string;
    }
}
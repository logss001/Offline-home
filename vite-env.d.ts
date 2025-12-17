// Fixed: Removed reference to 'vite/client' due to missing type definitions.
// Added manual declarations for asset modules usually provided by vite/client.

declare module '*.css';
declare module '*.png';
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default src;
}
declare module '*.jpg';
declare module '*.jpeg';

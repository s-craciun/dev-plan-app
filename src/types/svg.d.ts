declare module '*.svg?import' {
  import { FunctionComponent, SVGProps } from 'react';

  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

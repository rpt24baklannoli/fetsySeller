import { createGlobalStyle } from 'styled-components';

import HKGroteskLightWoff from './HKGrotesk-Light.woff';
import HKGroteskLightWoff2 from './HKGrotesk-Light.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'GroteskLight';
        src: local('GroteskLight'), local('GroteskLight'),
        url(${HKGroteskLightWoff2}) format('woff2'),
        url(${HKGroteskLightWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;

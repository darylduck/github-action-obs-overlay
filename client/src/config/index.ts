export const WEBSOCKET_SCHEME = process?.env?.REACT_APP_WEBSOCKET_SCHEME || 'ws';
export const WEBSOCKET_URL = process?.env?.REACT_APP_WEBSOCKET_URL || 'localhost';
export const WEBSOCKET_PORT = process?.env.REACT_APP_WEBSOCKET_PORT;
export const SOCKET_URL = `${WEBSOCKET_SCHEME}://${WEBSOCKET_URL}${WEBSOCKET_PORT ? `:${WEBSOCKET_PORT}`: ''}`;
export const DISPLAY_DURATION = 10000;
export const BUILD_SUCCESS_IMAGE_URL = process.env.REACT_APP_SUCCESS_IMAGE_URL || '';
export const BUILD_FAILURE_IMAGE_URL = process.env.REACT_APP_FAILURE_IMAGE_URL || '';
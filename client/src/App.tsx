import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

import BuildStatusLogo from "./components/BuildStatus/BuildStatus";
import {
  SOCKET_URL,
  DISPLAY_DURATION,
  BUILD_SUCCESS_IMAGE_URL,
  BUILD_FAILURE_IMAGE_URL
} from './config';

function App() {  
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState<{ success: boolean }>();

  // Listen for a websocket message, and on message show either good or bad.
  const onMessage = (message: any) => {
    setMessage(JSON.parse(message.data));
    setShowMessage(true);
  };

  useWebSocket(SOCKET_URL, {
    onMessage: onMessage
  });

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, DISPLAY_DURATION);
    }
  }, [showMessage]);

  const buildLogoUrl = message?.success ? BUILD_SUCCESS_IMAGE_URL : BUILD_FAILURE_IMAGE_URL;  

  return showMessage ? <BuildStatusLogo buildLogoUrl={buildLogoUrl} /> : null;
}

export default App;

import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

import BuildStatus from "./components/BuildStatus/BuildStatus";

const SOCKET_URL_ONE = "ws://localhost:8080";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState<{ success: boolean }>();

  // Listen for a websocket message, and on message show either good or bad.
  const onMessage = (message: any) => {
    setMessage(JSON.parse(message.data));
    setShowMessage(true);
  };

  useWebSocket(SOCKET_URL_ONE, {
    share: true,
    onMessage: onMessage
  });

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 10000);
    }
  }, [showMessage])

  return showMessage ? <BuildStatus
            heading={'Build Failed!!!'}
            message="There appears to be an issue with the latest push to the {branchName} branch. Please review and fix the build."
            statusLogoAlt="Build Failed"
            statusMessageLogoAlt="Build Failed Dialogue"
            status={message?.success ? 'success': 'failure'}
          />: null;
}

export default App;

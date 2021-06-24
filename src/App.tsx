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
  }, [showMessage]);

  const heading = message?.success ? 'Build Succeeded!!!': 'Build Failed!!!';
  const messageContent = message?.success ? 'That build that was run on the master branch was successful. Keep up the good work!!!!': 'There appears to be an issue with the latest push to the master branch. Please review and fix the build.';
  const statusLogoAlt = message?.success ? 'Build Succeeded' : 'Build Failed';
  const statusMessageLogoAlt = message?.success ? 'Build Succeeded Dialogue' : 'Build Failed Dialogue';
  const buildStatus = message?.success ? 'success': 'failure';

  return showMessage ? <BuildStatus
            heading={heading}
            message={messageContent}
            statusLogoAlt={statusLogoAlt}
            statusMessageLogoAlt={statusMessageLogoAlt}
            status={buildStatus}
          />: null;
}

export default App;

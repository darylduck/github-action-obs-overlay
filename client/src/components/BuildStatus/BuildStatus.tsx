import buildSuccessLogo from "../../images/build-success-logo.svg";
import buildSuccessMessage from "../../images/build-success-menu.svg";
import buildErrorLogo from "../../images/build-failure-logo.svg";
import buildErrorMessage from "../../images/build-failure-menu.svg";

import "./BuildStatus.css";

export interface BuildStatusProps {
  status: string;
  statusLogoAlt: string;
  statusMessageLogoAlt: string;
  heading: string;
  message: string;
}

const BuildStatus = (props: BuildStatusProps): JSX.Element => {
  const isBuildSuccessful = props.status.toLowerCase() === "success";
  const buildLogo = isBuildSuccessful ? buildSuccessLogo : buildErrorLogo;
  const buildMessageLogo = isBuildSuccessful
    ? buildSuccessMessage
    : buildErrorMessage;

  return (
    <div className="build-status">
      <img src={buildLogo} className="build-logo" alt={props.statusLogoAlt} />
      <img
        src={buildMessageLogo}
        className="build-message-container"
        alt={props.statusMessageLogoAlt}
      />
      <h1>{props.heading}</h1>
      <p className="build-message">{props.message}</p>
    </div>
  );
};

export default BuildStatus;

import "./BuildStatus.css";

export interface BuildStatusLogoProps {
  buildLogoUrl: string;
}

const BuildStatusLogo = ({ buildLogoUrl }: BuildStatusLogoProps): JSX.Element => {
  return (
    <div className="build-status" style={{backgroundImage: `url(${buildLogoUrl})`}}></div>
  );
};

export default BuildStatusLogo;

import "./BuildStatus.css";

export interface BuildStatusLogoProps {
  buildLogoUrl: string;
  width: number;
  height: number;
}

const BuildStatusLogo = ({ buildLogoUrl, width, height }: BuildStatusLogoProps): JSX.Element => {
  return (
    <div className="build-status" style={{
      backgroundImage: `url(${buildLogoUrl})`,
      backgroundSize: `${width}px ${height}px`
    }}></div>
  );
};

export default BuildStatusLogo;

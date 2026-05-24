import loadingBackground from "../shared/assets/loadingBackground.png";
import winLogo from "../shared/assets/winLogo.png";

export default function LoadingScreen() {
  return (
    <div
      className="loading-screen"
      style={{ backgroundImage: `url(${loadingBackground})` }}
    >
      <div className="loading-screen__content">
        <img
          className="loading-screen__logo"
          src={winLogo}
          alt="Windows 95 logo"
        />
        <div className="loading-screen__text">
          <div className="loading-screen__microsoft">Microsoft</div>
          <div className="loading-screen__windows">
            <span>Windows</span>
            <span className="loading-screen__windows-95">95</span>
          </div>
        </div>
      </div>
    </div>
  );
}

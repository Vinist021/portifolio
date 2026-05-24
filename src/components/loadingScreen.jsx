import loadingBackground from "../shared/assets/loadingBackground.png";
import winLogo from "../shared/assets/winLogo.png";

export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center font-sans pointer-events-auto bg-[#6fa8dc] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${loadingBackground})` }}
    >
      <div className="flex flex-col items-center gap-[clamp(10px,2.5vw,18px)] p-[clamp(16px,4vw,32px)] text-center">
        <div className="text-[clamp(16px,2.6vw,24px)] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">Microsoft</div>
        <img
          className="w-[min(70vw,320px)] h-auto max-w-full sm:w-[min(75vw,260px)]"
          src={winLogo}
          alt="Windows 95 logo"
        />
        <div className="flex flex-col items-center gap-[clamp(2px,1vw,6px)]">
          <div className="flex items-baseline gap-[clamp(6px,2vw,14px)] text-[clamp(30px,7vw,64px)] font-bold leading-none text-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.35)]">
            <span className="!font-['Archivo_Black']">Windows</span>
            <span className="font-bold">95</span>
          </div>
        </div>
      </div>
    </div>
  );
}

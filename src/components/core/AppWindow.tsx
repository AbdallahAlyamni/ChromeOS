import DraggableWrapper from "../common/dragble-wrapper";
import { Button } from "../ui/button";
import { Children, useEffect, useRef, useState } from "react";
import { ReactComponent as CloseIcon } from "@/assets/icons/CloseIcon.svg";
import { ReactComponent as MaximizeIcon } from "@/assets/icons/MaximizeIcon.svg";
import { ReactComponent as MinimizeIcon } from "@/assets/icons/MinimizeIcon.svg";
import { ReactComponent as UnmaximizeIcon } from "@/assets/icons/UnmaximizeIcon.svg";
import { motion, useAnimate } from "motion/react";
import { openedAppsAtom } from "@/atoms/app";
import { useAtom } from "jotai";

const AppWindow = ({ app, render }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(app.isMinimized);
  const [openedApps, setOpenedApps] = useAtom(openedAppsAtom);
  //   const [scope, animate] = useAnimate();

  const x = (window.innerWidth - 530) / 2;
  const y = (window.innerHeight - 550) / 2 - 20;

  //   useEffect(() => {
  //     if (isFullScreen) {
  //         const enterAnimation = async () => {
  //           await animate(scope.current, {  transform: "scale(1)" })
  //         }
  //         enterAnimation()
  //       } else {
  //         const exitAnimation = async () => {
  //           await animate(scope.current, { transform: "scale(0)" })
  //         //   safeToRemove()
  //         }
  //         exitAnimation()
  //       }
  //   }, [isFullScreen]);

  useEffect(() => {
    console.log(`app name: ${app.name} isMinimized ${isMinimized}`)
    setOpenedApps((prev) => {
      const index = prev.findIndex((item) => item.id === app.id);
      const updated = [...prev];
      updated[index] = { ...updated[index], isMinimized: isMinimized }; // merge fields
      console.log("u", updated);
      return updated;
    });
  }, [isMinimized]);

  const closeApp = () => {
    setOpenedApps(openedApps.filter(item => item.id != app.id));
  }

  return (
    <motion.div
      className="size-full"
      style={{ transformOrigin: "center center" }}
      initial={{ transform: "scale(0)", opacity: 0 }}
      animate={{ transform: "scale(1)", opacity: 1 }}
    >
      <DraggableWrapper
        defaultPosition={{ x: x, y: y }}
        className="rounded-xs border-0 p-0"
        title={app.name}
        width="min-w-fit"
        height="min-h-96"
        fullScreenWidth="100%"
        fullScreenHeight="100%"
        customWidth={app.defaultSize?.width ?? 530}
        customHeight={app.defaultSize?.height ?? 550}
        onFullScreenChange={setIsFullScreen}
        onMinimizeChange={setIsMinimized}
        closeButton={
          <Button onClick={closeApp} variant={"ghost"} size={"icon"} className="rounded-md p-0 size-fit">
            <CloseIcon className="text-foreground" />
          </Button>
        }
        maximizeButton={
          <Button variant={"ghost"} size={"icon"} className="rounded-md p-0 size-fit">
            {isFullScreen ? (
              <UnmaximizeIcon className="text-foreground" />
            ) : (
              <MaximizeIcon className="text-foreground" />
            )}
          </Button>
        }
        minimizeButton={
          <Button variant={"ghost"} size={"icon"} className="rounded-md p-0 size-fit">
            <MinimizeIcon className="text-foreground" />
          </Button>
        }
      >
        { render }
      </DraggableWrapper>
    </motion.div>
  );
};

export default AppWindow;

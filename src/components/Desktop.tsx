import { useAtom } from "jotai";
import AppWindow from "./AppWindow";
import { Shelf } from "./Shelf";
import { openedAppsAtom } from "@/atoms/app";
import { useEffect } from "react";
import { motion } from "motion/react";

function Desktop() {

    const [openedApps, setOpenedApps] = useAtom(openedAppsAtom);

    useEffect(() =>{
        console.log('opend', openedApps);
    }, [openedApps])
  return (
    <div className="w-screen h-screen bg-cover bg-center bg-[url('../src/assets/images/wallpapers/The_Lonely_Rock.jpg')]">
      <div
        className="grid grid-rows-[1fr_48px] h-full">
        <div className="size-full">
            {
                openedApps.length > 0 && openedApps.filter(app => app.isMinimized == false).map((app) =>
                <AppWindow key={app.id} app={app} />
                )
            }
        </div>
        <div className="bg-background rounded-t-3xl z-10">
          <Shelf></Shelf>
        </div>
      </div>
    </div>
  );
}

export default Desktop;

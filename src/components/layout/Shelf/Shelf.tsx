import { TASKBAR_APPS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ReactComponent as AppLauncherIcon } from "@/assets/icons/AppLancher.svg";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import AppLauncher from "./components/AppLauncher";
import { cn } from "@/lib/utils";
import { openedAppsAtom } from "@/atoms/app";
import { useAtom } from "jotai";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";
import { motion } from "motion/react";
import SystemTray from "./components/SystemTray";
import CalendarLauncher from "./components/CalendarLauncher";
import { format } from "date-fns";

export function Shelf() {
  const [openedApps, setOpenedApps] = useAtom(openedAppsAtom);

  const openApp = (newApp) => {
    setOpenedApps((prev) => {
      const index = prev.findIndex((app) => app.id === newApp.id);
      if (index === -1) {
        // Not found → add new app
        console.log("t", [...prev, newApp]);
        return [...prev, newApp];
      } else {
        // Found → update app
        const updated = [...prev];
        updated[index] = { ...updated[index], isMinimized: false }; // merge fields
        console.log("u", updated);
        return updated;
      }
    });
  };

  return (
    <div className="grid grid-cols-4 h-full w-full  px-1.5">
      <div className="flex items-center space-x-1 h-full">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"ghost"}
              className="h-9 w-9 p-0 rounded-full font-medium bg-white/45 hover:bg-primary hover:text-foreground"
            >
              <AppLauncherIcon className="w-6 h-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="m-2 my-2.5 bg-background w-[40rem] h-[85vh] border-0 p-0 pb-2 rounded-2xl">
            <AppLauncher />
          </PopoverContent>
        </Popover>
      </div>
      <div className="col-span-2 flex justify-center h-full items-center space-x-5">
        <TooltipProvider>
          {TASKBAR_APPS.map((app) => {
            return (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="h-full flex flex-col items-center justify-center">
                    <Button
                      onClick={() => openApp(app)}
                      key={app.name}
                      variant={"ghost"}
                      className={cn(
                        "relative p-0 size-fit rounded-full font-medium  hover:bg-transparent hover:text-foreground shadow-[0px_3px_2px_rgba(0,0,0,0.3)]"
                      )}
                    >
                      <img
                        src={app.icon}
                        className={cn(
                          app.iconShape == "circle" ? "size-8 p-0" : "bg-white size-[34px] p-0.5 rounded-full"
                        )}
                      />
                    </Button>
                    {openedApps.length > 0 && openedApps.find((item) => item.id == app.id) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute bottom-0 h-0.5 mb-[2px] w-3 bg-secondary rounded-full"
                      ></motion.div>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent sideOffset={10} className="bg-black/70">
                  <p>{app.name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
      <div className="flex justify-end items-center space-x-1 h-full">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"ghost"}
              className="h-fit rounded-l-full rounded-r-sm font-medium bg-white/45 hover:bg-primary hover:text-foreground"
            >
             { format(new Date(), 'MMM dd') }
            </Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-3xl bg-background shadow-none mr-2 border-none w-fit p-0" sideOffset={14}>
            <CalendarLauncher />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"ghost"}
              className="flex items-center space-x-1 h-fit rounded-r-full !rounded-l-3xl font-medium bg-white/45 hover:bg-primary hover:text-foreground"
            >
              <div>{ format(new Date(), 'HH:mm') }</div>
              <span className="icon text-[16px]">signal_wifi_4_bar</span>
              <BatteryChargingFullIcon sx={{ fontSize: "16px" }} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-3xl bg-background shadow-none mr-2 border-none w-fit" sideOffset={14}>
            <SystemTray />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

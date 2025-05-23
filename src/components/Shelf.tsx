import { TASKBAR_APPS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ReactComponent as AppLauncherIcon } from "@/assets/icons/AppLancher.svg";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import AppLauncher from "./AppLauncher";
import { cn } from "@/lib/utils";
import { openedAppsAtom } from "@/atoms/app";
import { useAtom } from "jotai";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { motion, scale } from "motion/react";
import { useState } from "react";
import { Slider } from "./ui/slider";

export function Shelf() {
  const [openedApps, setOpenedApps] = useAtom(openedAppsAtom);
  const [volume, setVolume] = useState(50);

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
              Jun 20
            </Button>
          </PopoverTrigger>
          <PopoverContent>content here</PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"ghost"}
              className="flex items-center space-x-1 h-fit rounded-r-full !rounded-l-3xl font-medium bg-white/45 hover:bg-primary hover:text-foreground"
            >
              <div>10:09</div>
              <span className="icon text-[16px]">signal_wifi_4_bar</span>
              <BatteryChargingFullIcon sx={{ fontSize: "16px" }} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-3xl bg-background shadow-none mr-2 border-none w-fit" sideOffset={14}>
            <div className="flex flex-col w-[24rem]">
              <div className="grid grid-cols-4 gap-2 w-full">
                <Button className="col-span-2 shadow-none gap-4 px-3 py-5 rounded-2xl size-full bg-primary flex items-center justify-between text-secondary font-normal">
                  <div className="flex items-center gap-4">
                    <span className="icon text-xl ">signal_wifi_4_bar</span>
                    <div className="flex flex-col items-start gap-4 leading-0">
                      <span className="text-sm font-medium leading-0">Redmi Note 10</span>
                      <span className="text-xs leading-0 font-medium">Strong</span>
                    </div>
                  </div>
                  <span className="icon text-xl">chevron_right</span>
                </Button>
                <Button className="whitespace-normal shadow-none gap-1 rounded-2xl size-fit bg-white/50 flex flex-col items-center justify-between text-secondary font-normal">
                  <span className="icon text-xl icon-weight-600">square_dot</span>
                  <span className="text-xs font-medium">Screen Capture</span>
                </Button>
                <Button className=" whitespace-normal shadow-none gap-1 rounded-2xl size-fit bg-white/50 flex flex-col items-center justify-between text-secondary font-normal">
                  <span className="icon text-xl icon-weight-600">do_not_disturb_on</span>
                  <span className="text-xs font-medium">Do Not Disturb</span>
                </Button>
                <Button className="col-span-2 shadow-none gap-4 px-3 py-5 rounded-2xl size-full bg-primary flex items-center justify-between text-secondary font-normal">
                  <div className="flex items-center gap-4">
                    <span className="icon text-xl icon-weight-600">bluetooth</span>
                    <div className="flex flex-col items-start gap-4 leading-0">
                      <span className="text-sm font-semibold leading-0">Bluetooth</span>
                      <span className="text-xs leading-0 font-medium">on</span>
                    </div>
                  </div>
                  <span className="icon text-xl icon-weight-600">chevron_right</span>
                </Button>
                <Button className="col-span-2 shadow-none gap-4 px-3 py-5 rounded-2xl size-full bg-white/50 flex items-center justify-between text-secondary font-normal">
                  <div className="flex items-center gap-4">
                    <span className="icon text-xl icon-weight-600">cast</span>
                    <div className="flex flex-col items-start gap-4 leading-0">
                      <span className="text-sm font-semibold leading-0">Cast Screen</span>
                      <span className="text-xs leading-0">Strong</span>
                    </div>
                  </div>
                  <span className="icon text-xl icon-weight-600">chevron_right</span>
                </Button>
                <Button className="col-span-2 shadow-none gap-4 px-3 py-5 rounded-2xl size-full bg-white/50 flex items-center justify-between text-secondary font-normal">
                  <div className="flex items-center gap-4">
                    <span className="icon text-xl scale-x-[-1] icon-weight-600">table_lamp</span>
                    <div className="flex flex-col items-start gap-4 leading-0">
                      <span className="text-sm font-semibold leading-0">Focus</span>
                    </div>
                  </div>
                  <span className="icon text-xl icon-weight-600">chevron_right</span>
                </Button>
                <div className="col-span-4 flex items-center gap-2 mt-4">
                  <div className="relative flex items-center w-full mr-8">
                    <span
                      className="absolute mx-2 icon text-xl z-20 text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1, 'wght' 700, 'opsz' 48" }}
                    >
                      volume_up
                    </span>
                    <Slider
                      defaultValue={[volume]}
                      max={100}
                      step={1}
                      min={1}
                      onValueChange={([val]) => setVolume(val)}
                      className={cn(
                        "w-full z-10",
                        "[&_[data-slot='slider-track']]:bg-transparent",
                        "[&_[data-slot='slider-track']]:data-[orientation=horizontal]:h-8",
                        "[&_[data-slot='slider-range']]:rounded-full",
                        "[&_[data-slot='slider-thumb']]:invisible"
                      )}
                    />
                    <div className="absolute h-1 bg-white/60 rounded-full w-full z-0"></div>
                  </div>
                  <Button className="bg-white/60 rounded-full px-2" variant={"secondary"} size={"icon"}>
                    <span className="icon text-xl  icon-weight-600">subtitles_off</span>
                  </Button>
                  <Button className="" variant={"ghost"} size={"icon"}>
                    <span className="icon text-xl  icon-weight-600">chevron_right</span>
                  </Button>
                </div>
                <div className="col-span-4 flex items-center gap-2">
                  <div className="relative flex items-center w-full mr-8">
                    <span
                      className="absolute mx-2 icon text-xl z-20 text-secondary"
                      style={{ fontVariationSettings: "'wght' 700, 'opsz' 48" }}
                    >
                      brightness_7
                    </span>
                    <Slider
                      defaultValue={[volume]}
                      max={100}
                      step={1}
                      min={1}
                      onValueChange={([val]) => setVolume(val)}
                      className={cn(
                        "w-full z-10",
                        "[&_[data-slot='slider-track']]:bg-transparent",
                        "[&_[data-slot='slider-track']]:data-[orientation=horizontal]:h-8",
                        "[&_[data-slot='slider-range']]:rounded-full",
                        "[&_[data-slot='slider-thumb']]:invisible"
                      )}
                    />
                    <div className="absolute h-1 bg-white/60 rounded-full w-full z-0"></div>
                  </div>
                  <Button className="bg-white/60 rounded-full px-2" variant={"secondary"} size={"icon"}>
                    <span className="icon text-xl  icon-weight-600">contrast_rtl_off</span>
                  </Button>
                  <Button className="" variant={"ghost"} size={"icon"}>
                    <span className="icon text-xl icon-weight-600">chevron_right</span>
                  </Button>
                </div>
                <div className="col-span-4 flex items-center justify-between gap-2 mt-4">
                  <div>
                    <Button className="bg-white/60 rounded-full px-2 py-1.5 shadow-none size-fit flex items-center" variant={"secondary"}>
                      <span
                        className="icon text-xl text-secondary"
                        style={{ fontVariationSettings: "'wght' 700, 'opsz' 48" }}
                      >
                        mode_off_on
                      </span>
                      <span className="icon text-xl" style={{ fontVariationSettings: "'wght' 700, 'opsz' 48" }}>
                        keyboard_arrow_down
                      </span>
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold">Battery Full</span>
                    <Button className="bg-white/60 rounded-full px-2" variant={"secondary"} size={"icon"}>
                      <span className="icon text-[22px] icon-weight-600 icon-rounded">settings</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

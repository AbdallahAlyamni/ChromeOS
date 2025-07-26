import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useState } from "react";

const SystemTray = () => {

  const [volume, setVolume] = useState(50);

  return (
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
            <Button
              className="bg-white/60 rounded-full px-2 py-1.5 shadow-none size-fit flex items-center"
              variant={"secondary"}
            >
              <span className="icon text-xl text-secondary" style={{ fontVariationSettings: "'wght' 700, 'opsz' 48" }}>
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
  );
};

export default SystemTray;
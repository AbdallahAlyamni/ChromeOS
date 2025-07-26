import { ReactComponent as GoogleLogo } from "@/assets/images/apps/google.svg";
import { ReactComponent as Trapezoid } from "@/assets/shapes/trapezoid.svg";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { STAR_MENU_APPS, STAR_MENU_DEFAULT_APPS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { cn } from "@/lib/utils";
import { motion } from "motion/react"
import { openedAppsAtom } from "@/atoms/app";
import { useAtom } from "jotai";

const AppLauncher = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTextValue] = useDebounce(searchText, 300);

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
    <div className="size-full flex flex-col rounded-xl border-[0.5px] border-background">
      <div className="flex items-center w-full py-2 border-b border-foreground/10">
        <Trapezoid className={cn(searchTextValue && "invisible", "mr-2 w-2 text-secondary")} />
        <GoogleLogo />
        <Input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="p-0 px-3 border-0 outline-0 ring-0 focus-visible:ring-0 shadow-none placeholder:text-foreground/70"
          type="text"
          placeholder="Search your shortcuts, files, apps and more"
        />
      </div>
      {searchTextValue.length > 0 ? (
        <ScrollArea className="h-[90%] w-full pb-4 pt-3 px-0">
          <div className="flex flex-col h-full">
            <motion.div initial={{ transform: "translateY(100px)", opacity:0 }} animate={{ transform: "translateY(0px)", opacity:1 }} className="flex flex-col">
              <span className="text-foreground/70 text-xs px-4 pb-2">Apps</span>
              {STAR_MENU_DEFAULT_APPS.map((app, index) => {
                return (
                  <div key={app.name + index} className="flex justify-start m-0 p-0">
                    <Button
                     onClick={() => openApp(app)}
                      key={app.name}
                      variant={"ghost"}
                      className={cn(
                        index == 0 && "bg-muted-foreground/20",
                        "flex items-center justify-start p-0 rounded-none h-full w-full font-medium hover:bg-muted-foreground/20"
                      )}
                    >
                        {/* <Trapezoid className="w-2 text-secondary" /> */}
                        <div className={cn( index == 0 && " border-l-2 border-secondary", "flex items-center justify-start px-2 py-1.5")}>
                        <img src={app.icon} className="size-5" />
                      <span className="text-foreground/90 font-normal text-xs px-3">{app.name}</span>
                        </div>
                    </Button>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </ScrollArea>
      ) : (
        <ScrollArea className="h-[90%] w-full py-4 px-6">
            <motion.div
            transition={{ duration: 0.3, ease: "easeInOut" }}
            initial={{ transform: "translateY(100px)", opacity:0 }} animate={{ transform: "translateY(0px)", opacity:1 }}>
           <div className="flex flex-col h-full">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-foreground/70 text-xs hover:no-underline">
                  Continue where you left off
                </AccordionTrigger>
                <AccordionContent asChild>
                  <div className="grid grid-cols-5 gap-x-16 border-b py-6 border-foreground/10 w-full">
                    {STAR_MENU_DEFAULT_APPS.map((app, index) => {
                      return (
                        <div key={app.name + index} className="flex justify-center m-0">
                          <Button
                            key={app.name}
                            onClick={() => openApp(app)}
                            variant={"ghost"}
                            className="flex flex-col p-0 h-full w-fit font-medium hover:bg-transparent"
                          >
                            <img src={app.icon} className="size-10" />
                            <span className="text-foreground/90 font-normal text-xs mt-1">{app.name}</span>
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-5 gap-x-16 gap-y-8 pt-6 w-full">
              {STAR_MENU_APPS.map((app, index) => {
                return (
                  <div key={app.name + index} style={{ margin: "0" }} className="flex justify-center">
                    <Button
                      key={app.name}
                      onClick={() => openApp(app)}
                      variant={"ghost"}
                      className="flex flex-col p-0 h-full w-fit font-medium hover:bg-transparent"
                    >
                      <img src={app.icon} className="size-10" />
                      <span className="text-foreground/90 font-normal text-xs mt-1">{app.name}</span>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
          </motion.div>
        </ScrollArea>
      )}
    </div>
  );
};

export default AppLauncher;

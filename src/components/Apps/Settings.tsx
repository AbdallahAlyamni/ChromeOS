"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Switch } from "../ui/switch";

export default function Settings() {
  const SettingTabs = [
    { name: "Network", icon: "network_wifi", subtext: "Redmi Note 10" },
    { name: "Bluetooth", icon: "bluetooth", subtext: "On" },
    { name: "Connected Devices", icon: "devices_other", subtext: "Connected to Redmi Note 10" },
    { name: "Accounts", icon: "face", subtext: "abdallahalyamni@gmail.com" },
    { name: "Device", icon: "laptop_chromebook", subtext: "Keyboard, mouse, print" },
    { name: "Wallpaper and style", icon: "design_services", subtext: "Dark theme, screen saver" },
    { name: "Privacy and security", icon: "security", subtext: "Lock screen, controls" },
    { name: "Apps", icon: "apps", subtext: "Notifications, Google Play" },
    { name: "Accessibility", icon: "accessibility_new", subtext: "Screen reader, magnification" },
  ];

  return (
    <div className="w-full h-[100vh] grid grid-cols-4 bg-background">
      <div className="col-span-1 flex flex-col size-full px-8">
        <div className="mb-8 mt-4 text-secondary-foreground font-medium px-2">Settings</div>
        <ScrollArea className="h-[85vh] w-full rounded-md">
          {SettingTabs.map((tab) => (
            <div className="flex items-center space-x-2 mb-4 cursor-pointer hover:bg-white/20 rounded-lg p-2">
              <span className="icon text-[20px] text-secondary-foreground">{tab.icon}</span>
              <div className="flex flex-col">
                <span className="text-foreground font-medium">{tab.name}</span>
                <span className="text-xs text-muted-foreground">{tab.subtext}</span>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
      <div className="col-span-3 size-full flex flex-col justify-center items-center my-2">
        <div className="py-2 px-6 bg-white rounded-full flex items-center">
          <span className="icon text-[20px]">search</span>
          <Input placeholder="Search settings" className="w-96 border-0 shadow-none focus-visible:ring-0  h-fit" />
        </div>
        <div className="mx-8 my-6 bg-white/50 h-full w-full rounded-3xl p-6 flex flex-col">
          <span className="text-secondary-foreground font-medium mb-4">Network</span>
          <div className="flex flex-col bg-white/50 rounded-2xl">
            <Button
              variant="ghost"
              className="rounded-t-2xl rounded-b-none border-b border-border/10 flex items-center justify-between px-6 py-4 h-fit"
            >
              <div className="flex items-center space-x-4">
                <span className="icon text-[20px] text-secondary-foreground">settings_ethernet</span>
                <div className="flex flex-col items-start">
                  <span className="text-foreground font-medium">Ethernet</span>
                  <span className="text-xs text-muted-foreground">No network</span>
                </div>
              </div>
              {/* <span className="text-secondary-foreground">Connected</span> */}
            </Button>
            <Button
              variant="ghost"
              className="rounded-none border-b border-border/10 flex items-center justify-between px-6 py-4 h-fit"
            >
              <div className="flex items-center space-x-4 w-full border-r pr-4 border-border/10">
                <div className="flex items-center space-x-4 w-full">
                  <span className="icon text-[20px] text-secondary-foreground">network_wifi_locked</span>
                  <div className="flex flex-col items-start">
                    <span className="text-foreground font-medium">Wi-Fi</span>
                    <span className="text-xs text-muted-foreground">Redmi Note 10</span>
                  </div>
                </div>
                <span className="icon text-[20px] text-secondary-foreground">arrow_right</span>
              </div>
              <div className="h-full items-center flex pl-4">
                <Switch />
              </div>
            </Button>
            <Button
              variant="ghost"
              className="rounded-none border-b border-border/10 flex items-center justify-between px-6 py-4 h-fit"
            >
              <div className="flex items-center space-x-4 w-full border-r pr-4 border-border/10">
                <div className="flex items-center space-x-4 w-full">
                  <span className="icon text-[20px] text-secondary-foreground">signal_cellular_0_bar</span>
                  <div className="flex flex-col items-start">
                    <span className="text-foreground font-medium">Mobile data</span>
                    <span className="text-xs text-muted-foreground">No network</span>
                  </div>
                </div>
                <span className="icon text-[20px] text-secondary-foreground">arrow_right</span>
              </div>
              <div className="h-full items-center flex pl-4">
                <Switch />
              </div>
            </Button>
            <Button
              variant="ghost"
              className="rounded-b-2xl rounded-t-none border-b border-border/10 flex items-center justify-between px-6 py-4 h-fit"
            >
              <div className="flex items-center space-x-4">
                {/* <span className="icon text-[20px] text-secondary-foreground">settings_ethernet</span> */}
                <div className="flex flex-col items-start">
                  <span className="text-foreground font-medium">Add connection</span>
                  {/* <span className="text-xs text-muted-foreground">No network</span> */}
                </div>
              </div>
              <span className="icon text-[20px] text-secondary-foreground">keyboard_arrow_down</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

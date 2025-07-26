import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format } from "date-fns";
import { Formatters } from "react-day-picker";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarLauncher = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const simplifiedWeekdayFormatters = {
    formatWeekdayName: (day: Date, options) => {
      return format(day, "EEEEE" /*, { locale: dateFnsLocaleObject }*/);
    },
  };

  return (
    <div className="flex flex-col w-[24rem] py-2 px-1">
      <Calendar
        formatters={simplifiedWeekdayFormatters}
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md w-full max-w-full p-0"
        classNames={{
          caption: "flex justify-between pt-1 relative items-center w-full px-3 pl-5",
          caption_label: "text-lg font-medium text-secondary",
          nav: "flex items-center gap-1",
          nav_button: cn(
            buttonVariants({ variant: "ghost" }),
            "size-8 bg-transparent p-0 text-secondary"
          ),
          nav_button_previous: "rotate-90  ",
          nav_button_next: "rotate-90",
          month: "w-full flex flex-col gap-4",
          head_cell: "text-secondary rounded-md w-full font-bold text-[0.8rem]",
          cell: cn(
            "w-full relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-transparent [&:has([aria-selected].day-range-end)]:rounded-r-md",
            "[&:has([aria-selected])]:rounded-full "
          ),
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "size-8 p-0 rounded-full text-secondary font-normal aria-selected:opacity-100 aria-selected:font-medium"
          ),
        }}
        components={{
            IconLeft: ({ className, ...props }) => (
              <ChevronLeft className={cn("size-5", className)} strokeWidth={2.5} {...props} />
            ),
            IconRight: ({ className, ...props }) => (
              <ChevronRight className={cn("size-5", className)} strokeWidth={2.5} {...props} />
            ),
          }}
      />
    </div>
  );
};

export default CalendarLauncher;

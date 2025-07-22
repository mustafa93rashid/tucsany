// data/FilterFields.ts

export type FilterField = {
  key: string;
  label: string;
  type: "select" | "date";
  icon: string;
  options?: string[]; 
};

export const filterFields: FilterField[] = [
  {
    key: "people",
    label: "Number of people",
    type: "select",
    icon: "/images/hero/tab/people.svg",
    options: ["Choose number", "1", "2", "3", "4", "5+"],
  },
  {
    key: "date",
    label: "Date",
    type: "date",
    icon: "/images/hero/tab/date.svg",
  },
  {
    key: "time",
    label: "Time",
    type: "select",
    icon: "/images/hero/tab/time.svg",
    options: ["Choose Time","Morning", "Afternoon", "Evening"],
  },
  {
    key: "tour",
    label: "Tour",
    type: "select",
    icon: "/images/hero/tab/tour.svg",
    options: ["Select Tour","City Tour", "Adventure", "Historical"],
  },
  {
    key: "transportation",
    label: "Transportation",
    type: "select",
    icon: "/images/hero/tab/car.svg",
    options: ["Select Transportation","Car", "Bus", "Bicycle"],
  },
];

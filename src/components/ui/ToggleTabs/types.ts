import { Dispatch, SetStateAction } from "react";

export type Tab = {
  value: string;
  label: string;
};

export type TabProps = {
  tab: Tab;
  checked: boolean;
  onClick: (value: string) => void;
};

export type ToggleTabsProps = {
  tabs: Tab[];
  currentTab: string | undefined;
  setTab: Dispatch<SetStateAction<string | undefined>>;
  defaultTab?: number;
  width?: string;
};

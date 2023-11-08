import { Dispatch, SetStateAction } from "react";

export type Tab = {
  value: string;
  label: string;
};

export type TabProps = {
  tab: Tab;
  name: string;
  checked: boolean;
};

export type ToggleTabsProps = {
  name: string;
  tabs: Tab[];
  option: string | undefined;
  setOption: Dispatch<SetStateAction<string | undefined>>;
  defaultOption?: number;
  width?: string;
};

import { FC, HTMLProps } from "react";
import styled from "styled-components";

import { SwitchVariants } from "./Switch";

export type SwitchStylesProperties = {
  Rail: FC<{ $checked: boolean } & HTMLProps<HTMLLabelElement>>;
  Knob: FC<{ $checked: boolean } & HTMLProps<HTMLDivElement>>;
};

export const SwitchStyles: Record<SwitchVariants, SwitchStylesProperties> = {
  "switch-primary": {
    Rail: styled.label<{ $checked: boolean }>`
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      border-radius: 10rem;

      width: 5.7rem;
      height: 3rem;
      border: 1px solid
        ${({ $checked }) =>
          $checked ? "var(--color-white)" : "var(--color-grey-light-1)"};
      padding: 0.6rem;
    `,
    Knob: styled.div<{ $checked: boolean }>`
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      transition: all 0.2s ease;

      background-color: ${({ $checked }) =>
        $checked ? "var(--color-white)" : "var(--color-grey-light-1)"};
      transform: translateX(${({ $checked }) => ($checked ? "2.5rem" : "0")});
    `,
  },
  "switch-secondary": {
    Rail: styled.label<{ $checked: boolean }>`
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      border-radius: 10rem;
      background-color: ${({ $checked }) =>
        $checked ? "var(--color-primary-dark)" : "var(--color-grey-dark-1)"};

      width: 3.4rem;
      height: 1.4rem;
    `,
    Knob: styled.div<{ $checked: boolean }>`
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      transition: all 0.2s ease;
      box-shadow: var(--shadow-sm);

      background-color: ${({ $checked }) =>
        $checked ? "var(--color-secondary)" : "var(--color-grey-dark-2)"};
      transform: translateX(
        ${({ $checked }) => ($checked ? "1.5rem" : "-.1rem")}
      );
    `,
  },
};

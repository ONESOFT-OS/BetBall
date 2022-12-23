import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import cx from  "classnames";
import React, { FormEventHandler } from "react";
import {Button} from "./Button";

export interface SelectProps extends SelectPrimitive.SelectProps{
  defaultOptions: Array<String>,
}

export function Select(props: SelectProps) {
  return (
    <SelectPrimitive.Root onValueChange={props.onValueChange}>
      <SelectPrimitive.Trigger>
        <Button className={"flex items-center justify-center"}>
          <SelectPrimitive.Value  placeholder={'Selecione...'} />
          <SelectPrimitive.Icon className="ml-2 flex flex-column justify-end">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </Button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content>
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-800 dark:text-gray-500">
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
          <SelectPrimitive.Group>
            {props.defaultOptions.map(
              (f, i) => (
                <SelectPrimitive.Item
                  key={`${f}-${i}`}
                  value={f.toString()}
                  className={cx(
                    "relative flex items-center px-8 py-2 rounded-md text-sm text-white font-medium focus:bg-gray-500 dark:focus:bg-gray-900",
                    "radix-disabled:opacity-50",
                    "focus:outline-none select-none"
                  )}
                >
                  <SelectPrimitive.ItemText>{f}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                    <CheckIcon />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              )
            )}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-800 dark:text-gray-500">
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};

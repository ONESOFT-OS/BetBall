import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import cx from  "classnames";
import React from "react";
import {Button} from "./Button";

export interface SelectRProps extends SelectPrimitive.SelectProps{}

export function SelectR(props: SelectRProps) {
  return (
    <SelectPrimitive.Root  defaultValue="Teste"  >
      <SelectPrimitive.Trigger asChild aria-label="Pagamento" >
        <Button>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className="ml-2  flex flex-row justify-end  ">
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
            {["Pix", "Cartão de Crédito", "Teste" ].map(
              (f, i) => (
                <SelectPrimitive.Item 
                  disabled={f === "Boleto"}
                  key={`${f}-${i}`}
                  value={f.toLowerCase()}
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



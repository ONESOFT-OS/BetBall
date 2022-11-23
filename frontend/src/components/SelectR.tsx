import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import cx from  "classnames";
import {Button} from "./Button";

export interface SelectRProps extends SelectPrimitive.SelectProps{}

export function SelectR(props: SelectRProps) {
  return (
    <SelectPrimitive.Root >
      <SelectPrimitive.Trigger className="inline-flex items-center justify-center rounded-xl px-4 font-xs font-[35px] gap-[5px] bg-green-700 text-white shadow-[0 2px 10px] shadow-black hover:bg-green-500 focus: shadow-[0 0 0 2px] w-52 " asChild aria-label="Pagamento" >
        <Button>
          <SelectPrimitive.Value placeholder="Forma de pagamento"/>
          <SelectPrimitive.Icon className="text-white">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </Button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content className="overflow-hidden bg-black rounded-[6px] ">
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-800 dark:text-gray-500">
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="p-[5px]">
          <SelectPrimitive.Group>
            {["Pix", "Cartão de Crédito" ].map(
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



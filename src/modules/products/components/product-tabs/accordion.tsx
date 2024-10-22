import { Text, clx } from "@medusajs/ui"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import React, { Key } from "react"

type AccordionItemProps = AccordionPrimitive.AccordionItemProps & {
  title: string
  subtitle?: string
  description?: string
  required?: boolean
  tooltip?: string
  forceMountContent?: true
  headingSize?: "small" | "medium" | "large"
  customTrigger?: React.ReactNode
  complete?: boolean
  active?: boolean
  triggerable?: boolean
  children: React.ReactNode
}

type AccordionSingleProps = Omit<AccordionPrimitive.AccordionSingleProps, 'type'> & {
  type: 'single'
}

type AccordionMultipleProps = Omit<AccordionPrimitive.AccordionMultipleProps, 'type'> & {
  type: 'multiple'
}

type AccordionProps = {
  key?: Key
  children: React.ReactNode
} & (AccordionSingleProps | AccordionMultipleProps)

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, key, ...props }, ref) => {
    if (props.type === 'single') {
      return (
        <AccordionPrimitive.Root 
          ref={ref}
          key={key} 
          type="single" 
          {...props}
        >
          {children}
        </AccordionPrimitive.Root>
      )
    } else {
      return (
        <AccordionPrimitive.Root 
          ref={ref}
          key={key} 
          type="multiple" 
          {...props}
        >
          {children}
        </AccordionPrimitive.Root>
      )
    }
  }
) as React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>
}

// Add display name for the main Accordion component
Accordion.displayName = 'Accordion'

const Item: React.FC<AccordionItemProps> = ({
  title,
  subtitle,
  description,
  children,
  className,
  headingSize = "large",
  customTrigger = undefined,
  forceMountContent = undefined,
  triggerable,
  ...props
}) => {
  return (
    <AccordionPrimitive.Item
      {...props}
      className={clx(
        "border-grey-20 group border-t last:mb-0 last:border-b",
        "py-3",
        className
      )}
    >
      <AccordionPrimitive.Header className="px-1">
        <div className="flex flex-col">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4">
              <Text className="text-ui-fg-subtle text-sm">{title}</Text>
            </div>
            <AccordionPrimitive.Trigger>
              {customTrigger || <MorphingTrigger />}
            </AccordionPrimitive.Trigger>
          </div>
          {subtitle && (
            <Text as="span" size="small" className="mt-1">
              {subtitle}
            </Text>
          )}
        </div>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content
        forceMount={forceMountContent}
        className={clx(
          "radix-state-closed:animate-accordion-close radix-state-open:animate-accordion-open radix-state-closed:pointer-events-none px-1"
        )}
      >
        <div className="inter-base-regular group-radix-state-closed:animate-accordion-close">
          {description && <Text>{description}</Text>}
          <div className="w-full">{children}</div>
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
}

// Add display name for the Item component
Item.displayName = 'Accordion.Item'

const MorphingTrigger = () => {
  return (
    <div className="text-grey-90 hover:bg-grey-5 active:bg-grey-5 active:text-violet-60 focus:border-violet-60 disabled:text-grey-30 bg-transparent disabled:bg-transparent rounded-rounded group relative p-[6px]">
      <div className="h-5 w-5">
        <span className="bg-grey-50 rounded-circle group-radix-state-open:rotate-90 absolute inset-y-[31.75%] left-[48%] right-1/2 w-[1.5px] duration-300" />
        <span className="bg-grey-50 rounded-circle group-radix-state-open:rotate-90 group-radix-state-open:left-1/2 group-radix-state-open:right-1/2 absolute inset-x-[31.75%] top-[48%] bottom-1/2 h-[1.5px] duration-300" />
      </div>
    </div>
  )
}

// Add display name for the MorphingTrigger component
MorphingTrigger.displayName = 'Accordion.MorphingTrigger'

Accordion.Item = Item

export default Accordion

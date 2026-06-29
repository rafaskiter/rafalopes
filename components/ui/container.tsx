import { cn } from "@/lib/utils";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  size?: "default" | "wide" | "narrow";
} & React.ComponentPropsWithoutRef<T>;

const sizes = {
  default: "max-w-7xl",
  wide: "max-w-[96rem]",
  narrow: "max-w-3xl",
} as const;

/** Wrapper de largura máxima com gutters responsivos. */
export function Container<T extends React.ElementType = "div">({
  as,
  size = "default",
  className,
  ...props
}: ContainerProps<T>) {
  const Comp = as ?? "div";
  return (
    <Comp
      className={cn("mx-auto w-full px-6 sm:px-8 lg:px-12", sizes[size], className)}
      {...props}
    />
  );
}

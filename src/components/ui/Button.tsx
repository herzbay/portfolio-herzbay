import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const surfaceClasses: Record<"primary" | "secondary", string> = {
  primary:
    "bg-gradient-to-b from-surface to-background text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
  secondary:
    "bg-gradient-to-b from-surface to-background text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
};

function SpinBorderContent({
  variant,
  children,
}: {
  variant: "primary" | "secondary";
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Spinning border beam — visible on hover/focus */}
      <span
        aria-hidden="true"
        className="absolute inset-[-100%] animate-[spin_2.6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      {/* Static edge — hides on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-border transition-opacity duration-300 group-hover:opacity-0"
      />
      {/* Content surface */}
      <span
        className={cn(
          "relative flex h-full w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200",
          surfaceClasses[variant]
        )}
      >
        {children}
      </span>
    </>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const isGhost = variant === "ghost";

  const wrapperClasses = isGhost
    ? cn(
        "inline-flex items-center gap-2 rounded-[var(--radius-sm)] px-2 py-1 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )
    : cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      );

  const content =
    variant === "ghost" ? (
      children
    ) : (
      <SpinBorderContent variant={variant}>{children}</SpinBorderContent>
    );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        className={wrapperClasses}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
      >
        {content}
      </Link>
    );
  }

  const { ...buttonProps } = props as ComponentPropsWithoutRef<"button">;
  return (
    <button className={wrapperClasses} {...buttonProps}>
      {content}
    </button>
  );
}
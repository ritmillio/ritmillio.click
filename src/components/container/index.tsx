import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`mx-auto max-w-xl px-4 md:px-10 xl:px-4`, className)}>
      {children}
    </div>
  );
};

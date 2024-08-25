import Link from "next/link";

export interface MenuItemProps {
  className?: string;
  title?: string;
  href?: string;
  icon?: any;
  size?: number;
  showLabel?: boolean;
}

export const MenuItem = ({
  className,
  title,
  href,
  icon,
  showLabel = false,
  size,
}: MenuItemProps) => {
  return (
    <Link
      href={href || ""}
      className={`py-2 flex rounded h-fit w-full ${className || ""}`}
    >
      {icon}
      {showLabel && <span className="ml-4">{title}</span>}
    </Link>
  );
};

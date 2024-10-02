import clsx from "clsx";

export const ABButton = ({
  className,
  children,
  onClick,
  id,
  small,
  name,
  disabled,
  outline,
  icon: Icon,
  ...rest
}) => {
  return (
    <button
      id={id}
      disabled={disabled}
      name={name}
      onClick={onClick}
      className={clsx(
        className,
        "relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full",
        outline ? "bg-white" : "bg-rose-500",
        outline ? "border-black" : "border-rose-500",
        outline ? "Otext-black" : "text-white",
        small ? "py-1" : "py-3",
        small ? "text-sm" : "text-md",
        small ? "font-light" : "font-semibold",
        small ? "border-[1px]" : "border-2"
      )}
      {...rest}
    >
      {Icon && <Icon size={24} className="absolute top-3 left-4" />}
      {children}
    </button>
  );
};

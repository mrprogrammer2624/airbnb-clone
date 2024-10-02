import clsx from "clsx";

export const ABInput = ({
  id,
  name,
  type = "text",
  label,
  value,
  onChange,
  disabled,
  placeholder,
  errorMessage,
  parentClassName,
  labelClassName,
  rootClassName,
  ...rest
}) => {
  return (
    <div className={clsx(parentClassName, "relative w-full")}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            labelClassName,
            "text-sm font-medium text-gray-300 block mb-2"          )}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          "w-full px-3 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring",
          rootClassName
        )}
        {...rest}
      />
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

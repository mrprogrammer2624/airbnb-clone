import clsx from "clsx";
import { BiDollar } from "react-icons/bi";

export const ABInput = ({
  id,
  placeholder,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        className={clsx(
          "peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition",
          "disabled:opacity-70 disabled:cursor-not-allowed",
          {
            "pl-9": formatPrice,
            "pl-4": !formatPrice,
            "border-rose-500": errors[id],
            "border-neutral-300": !errors[id],
            "focus:border-rose-500": errors[id],
            "focus:border-black": !errors[id],
          }
        )}
      />
      <label
        htmlFor={id}
        className={clsx(
          "absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
          {
            "left-9": formatPrice,
            "left-4": !formatPrice,
            "text-rose-500": errors[id],
            "text-zinc-400": !errors[id],
          }
        )}
      >
        {placeholder}
      </label>
      {errors[id] && (
        <p className="text-red-500 text-sm mt-1">{errors[id]?.message}</p>
      )}
    </div>
  );
};

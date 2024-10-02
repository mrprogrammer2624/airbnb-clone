export const ABHeading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      {subtitle && (
        <div className="text-neutral-500 mt-2 font-light">{subtitle}</div>
      )}
    </div>
  );
};

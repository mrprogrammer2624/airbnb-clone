import clsx from "clsx";
import { useCallback } from "react";
import qs from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

export const CategoryBox = ({ icon: Icon, label, selected }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    // Parse the current query parameters
    const params = new URLSearchParams(location.search);
    if (params) {
      currentQuery = qs.parse(params.toString());

      // Update the query with the selected category
      const updatedQuery = {
        ...currentQuery,
        category: label,
      };

      // If the category is already selected, remove it
      if (params.get("category") === label) {
        delete updatedQuery.category;
      }

      // Construct the new URL
      const url = qs.stringifyUrl(
        {
          url: location.pathname,
          query: updatedQuery,
        },
        { skipNull: true }
      );

      // Navigate to the new URL
      navigate(url);
    }
  }, [location, label, navigate]);
  return (
    <div
      onClick={handleClick}
      className={clsx(
        "flex flex-col items-center justify-center gap-2 p-3 border-b-2 transition cursor-pointer hover:border-b-neutral-800 hover:text-neutral-800",
        {
          "border-b-neutral-800 text-neutral-800": selected,
          "border-transparent text-neutral-500": !selected,
        }
      )}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

import { FiltersOptions } from "@/components/Filters";
import { limitOptions, orderByOptions } from "@/utils/filtersOptions";

export const dataInitialValue = {
    categoryOptions: [],
    orderByOptions: orderByOptions,
    limitOptions: limitOptions,
};


export const initialFiltersOptions: FiltersOptions = {
  categories: [],
  name: "",
  sortBy: [],
  limit: [],
  page: 1
};


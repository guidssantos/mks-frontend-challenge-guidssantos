import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
  } from "react";
  import * as S from "./styles";
  import { Select } from "../Select";
  import { DateRangeInput } from "../DateRangeInput";
import { FormInput } from "../FormInput";
  
  export type FiltersOptions = {
    categories: string[];
    sortBy: string[];
    limit: string[];
    startDate: number;
    endDate: number;
    name?: string;
    page?: number;
  };
  
  type FilterProps = {
    options: any,
    filters: FiltersOptions;
    setFilters: Dispatch<SetStateAction<FiltersOptions>>;
  };
  
  type SelectsOptions = "categories" | "sortBy" | "limit";
  
  export const Filters = ({ options, filters, setFilters }: FilterProps) => {
    const onSelect = (newOption: string, optionType: SelectsOptions) => {
      setFilters((prevFilters) => {
        const newOptions = [...prevFilters[optionType]];
  
        if (newOptions.includes(newOption)) {
          newOptions.splice(newOptions.indexOf(newOption), 1);
        } else {
          newOptions.push(newOption);
        }
  
        return {
          ...prevFilters,
          [optionType]: newOptions,
        };
      });
    };

    const onSelectIndividual = (newOption: any, optionType: SelectsOptions) => {
      setFilters((prevFilters) => {
        return {
          ...prevFilters,
          [optionType]: newOption.value,
        };
      });
    };

  
    const onRemoveAll = (optionType: SelectsOptions) => {
      setFilters((prevFilters) => {
        return {
          ...prevFilters,
          [optionType]: [],
        };
      });
    };
  
    const onChangeDate = (
      dateString: string,
      dateProp: "startDate" | "endDate",
    ) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [dateProp]: Number(new Date(dateString)),
      }));
    };

  
    return (
      <S.FiltersContainer>
        <FormInput
          id="name"
          placeholder="Pesquisa por nome"
          type="text"
          autoComplete="off"
          value={filters.name}
          onChange={(e) => {
            setFilters((prevFilters) => ({
              ...prevFilters,
              name: e.target.value
            }))
          }}
        />
        <S.SelectContainer>
        <Select
          placeholder="Selecione a categoria"
          options={options.categoryOptions}
          selectedOptions={filters.categories}
          onSelectOption={(options: any) => onSelect(options.value, "categories")}
          onRemoveAll={() => onRemoveAll("categories")}
        />
        <DateRangeInput onChangeDate={onChangeDate} filters={filters} />
        <Select
          placeholder="Ordernar por"
          individual
          options={options.orderByOptions}
          selectedOptions={filters.sortBy}
          onSelectOption={(options: any) => {
            onSelectIndividual(options, "sortBy")}}
        />
        <Select
          placeholder="Exibir"
          individual
          options={options.limitOptions}
          selectedOptions={filters.limit}
          onSelectOption={(options: any) => onSelectIndividual(options, "limit")}
        />
        </S.SelectContainer>

      </S.FiltersContainer>
    );
  };
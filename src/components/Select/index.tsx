import { useMemo, useState } from "react";
import * as S from "./styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type SelectProps = {
  options: {
    label: string,
    value: string | number
  }[];
  selectedOptions: any;
  placeholder: string;
  onSelectOption: (option: {
    label: string,
    value: string | number
  }) => void;
  onRemoveAll?: () => void;
  individual?: boolean;
};

export const Select = ({
  placeholder,
  options,
  selectedOptions,
  onSelectOption,
  onRemoveAll,
  individual
}: SelectProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const filteredOptions = useMemo(() => {
    if (!search) return options;

    return options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase()),
    );
  }, [options, search]);


  return (
    <S.SelectWrapper>
      <S.SelectContainer
        onClick={() => setShowOptions((prevState) => !prevState)}
      >
        <input
          placeholder={placeholder}
          value={
            individual
              ? filteredOptions.find(
                  (option) => option.value === selectedOptions
                )?.label
              : search
          }
          onChange={(e) => {
            setSearch(e.target.value)
            if (!showOptions) setShowOptions(true)
          }}
        />
        <S.IconContainer>
          <MdOutlineKeyboardArrowDown />
        </S.IconContainer>
      </S.SelectContainer>
      {!individual && (
        <>
          {selectedOptions?.length > 0 && (
            <S.QuantitySelectedIndicator>
              {selectedOptions.length} opções selecionadas
            </S.QuantitySelectedIndicator>
          )}
        </>
      )}
      {showOptions && (
        <S.OptionsContainer>
          <S.OptionsList>
            {filteredOptions?.map((option) => (
              <S.Option
                key={option.value}
                selected={
                  individual
                    ? selectedOptions === option.value
                    : selectedOptions.includes(option.value)
                }
                onClick={() => onSelectOption(option)}
              >
                {!individual && <div></div>}
                <span>{option.label}</span>
              </S.Option>
            ))}
          </S.OptionsList>
          {onRemoveAll && (
            <button
              onClick={() => {
                setSearch('')
                setShowOptions(false)
                if (selectedOptions.length === 0) return
                onRemoveAll()
              }}
            >
              Remover todos
            </button>
          )}
        </S.OptionsContainer>
      )}
    </S.SelectWrapper>
  )
};

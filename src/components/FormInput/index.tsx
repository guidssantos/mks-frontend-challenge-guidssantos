import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import * as S from "./styles";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  error?: string
  canToggleTextVisibility?: boolean
  register?: UseFormRegisterReturn
  Icon?: any;
  id?: string;
}

export const FormInput = ({
  label,
  error,
  canToggleTextVisibility,
  register,
  Icon,
  id,
  ...props
}: FormInputProps) => {

  return (
    <S.FormInputContainer id={id} error={error} data-testid="form-input-container">
      {!!label && (
        <S.InputLabel
          htmlFor={id}
          error={error}
          data-testid="form-input-label"
        >
          {label}
        </S.InputLabel>
      )}
      {!!error && (
        <S.ErrorLabel data-testid="form-input-error-label">
          {error}
        </S.ErrorLabel>
      )}
      <input
        data-testid="form-input"
        {...props}
        {...register}
        type={
          props.type
        }
      />
      {Icon && (
        <S.IconContainer
        >
          <Icon />
        </S.IconContainer>
      )}
    </S.FormInputContainer>
  )
};

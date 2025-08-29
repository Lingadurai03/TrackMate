import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import Input from '../Input';

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
  rules?: object;
}

function FormInput<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  isPassword,
  rules,
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <Input
          label={label}
          placeholder={placeholder}
          isPassword={isPassword}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          error={error?.message}
        />
      )}
    />
  );
}
export default FormInput;

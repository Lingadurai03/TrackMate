import { Button, FormInput } from '@shared/Ui';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { authActions } from '../model';

interface RegisterFormValues {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function RegisterForm() {
  const { control, handleSubmit, watch } = useForm<RegisterFormValues>({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const dispatch = useDispatch();
  const password = watch('password');

  const onSubmit = (data: RegisterFormValues) => {
    dispatch(authActions.registerRequest(data));
  };

  return (
    <View className="mt-8 gap-2">
      <FormInput<RegisterFormValues>
        name="fullName"
        control={control}
        label="Full Name"
        placeholder="Enter full name"
        rules={{ required: 'Full name is required' }}
      />
      <FormInput<RegisterFormValues>
        name="phone"
        control={control}
        label="Phone"
        placeholder="Enter phone number"
        rules={{ required: 'Phone number is required' }}
      />
      <FormInput<RegisterFormValues>
        name="email"
        control={control}
        label="Email"
        placeholder="Enter email"
        rules={{ required: 'Email is required' }}
      />

      <FormInput<RegisterFormValues>
        name="password"
        control={control}
        label="Password"
        placeholder="Enter password"
        isPassword
        rules={{ required: 'Password is required' }}
      />

      <FormInput<RegisterFormValues>
        name="confirmPassword"
        control={control}
        label="Confirm Password"
        placeholder="Enter confirm password"
        isPassword
        rules={{
          required: 'Confirm password is required',
          validate: (value: string) =>
            value === password || 'Passwords do not match',
        }}
      />

      <Button size="lg" className="mt-6" onPress={handleSubmit(onSubmit)}>
        Register
      </Button>
    </View>
  );
}

export default RegisterForm;

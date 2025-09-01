import { Button, FormInput } from '@shared/Ui';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { authActions } from '../model';

type LoginFormValues = {
  email: string;
  password: string;
};

function LoginForm() {
  const { control, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: { email: '', password: '' },
  });

  const dispatch = useDispatch();

  const onSubmit = (data: LoginFormValues) => {
    dispatch(authActions.loginRequest(data));
  };

  return (
    <View className="mt-10">
      <FormInput<LoginFormValues>
        name="email"
        control={control}
        label="Email"
        placeholder="Enter email"
        rules={{ required: 'Email is required' }}
      />

      <FormInput<LoginFormValues>
        name="password"
        control={control}
        label="Password"
        placeholder="Enter password"
        isPassword
        rules={{ required: 'Password is required' }}
      />

      <Button size="lg" onPress={handleSubmit(onSubmit)}>
        Login
      </Button>
    </View>
  );
}

export default LoginForm;

import { Button, FormInput } from '@shared/Ui';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { authActions } from '../model';

type PhoneFormValues = {
  phone: string;
};

function PhoneLoginForm() {
  const { control, handleSubmit } = useForm<PhoneFormValues>({
    defaultValues: { phone: '' },
  });

  const dispatch = useDispatch();

  const onSubmit = (data: PhoneFormValues) => {
    // dispatch OTP request saga
    dispatch(authActions.sendOtpRequest(data.phone));
  };

  return (
    <View className="mt-8 gap-2">
      <FormInput<PhoneFormValues>
        name="phone"
        control={control}
        label="Phone Number"
        placeholder="+91 98765 43210"
        rules={{ required: 'Phone number is required' }}
      />

      <Button size="lg" className="mt-6" onPress={handleSubmit(onSubmit)}>
        Continue
      </Button>
    </View>
  );
}

export default PhoneLoginForm;

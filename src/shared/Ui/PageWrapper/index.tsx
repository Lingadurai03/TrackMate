import React from 'react';
import { View, ViewProps } from 'react-native';

type PageContainerProps = ViewProps & {
  children?: React.ReactNode;
  className?: string;
};

const PageContainer = ({
  children,
  className,
  ...rest
}: PageContainerProps) => {
  return (
    <View
      className={` bg-primary dark:bg-secondary ${className || ''}`}
      {...rest}
    >
      {children}
    </View>
  );
};

export default PageContainer;

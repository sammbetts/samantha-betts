import React, { PropsWithChildren } from 'react';
import { AppContainer } from '../AppContainer';

type Props = {
  children: PropsWithChildren<React.ReactNode>;
};

export const PageTemplate: React.FC<Props> = ({
  children,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <AppContainer>{children}</AppContainer>
    </>
  );
};

import React, { PropsWithChildren } from 'react';
import { AppContainer } from '../AppContainer';
import { ThemeContextProvider } from '../../theme/themeContext';

type Props = {
  children: PropsWithChildren<React.ReactNode>;
};

export const PageTemplate: React.FC<Props> = ({
  children,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <ThemeContextProvider>
        <AppContainer>{children}</AppContainer>
      </ThemeContextProvider>
    </>
  );
};

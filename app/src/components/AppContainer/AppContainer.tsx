import React, { PropsWithChildren } from 'react';
import { Container, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

type Props = {
  children: PropsWithChildren<React.ReactNode>;
};

const useStyles = makeStyles((theme: Theme) => ({
  appContainer: {
    boxShadow:
      'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;',
    backgroundColor: theme.palette.background.paper,
    fontColor: theme.palette.text.primary,
    position: 'relative',
    padding: '2rem',
    marginTop: '2rem',
    marginBottom: '2rem',
    borderRadius: '0.5em',
    minWidth: '1000px',
    maxWidth: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    transition: '0.8s ease',
  },
}));

export const AppContainer: React.FC<Props> = ({
  children,
}: PropsWithChildren<Props>) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.appContainer}>{children}</Container>
    </>
  );
};

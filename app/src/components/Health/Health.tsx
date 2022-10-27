import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { Box } from '@mui/material';

interface Props {
  isHealthy: boolean;
}

export const Health: React.FC<Props> = (props: Props) => {
  const { isHealthy } = props;

  const icon = isHealthy ? (
    <GppGoodOutlinedIcon
      color="success"
      fontSize="large"
      data-test-id={'good-icon'}
    />
  ) : (
    <ErrorOutlineIcon
      color="error"
      fontSize="large"
      data-test-id={'error-icon'}
    />
  );

  return <Box data-test-id="health-icon">{icon}</Box>;
};

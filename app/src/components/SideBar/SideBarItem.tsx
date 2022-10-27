import React from 'react';
import { Box, Typography } from '@mui/material';

type Props = {
  title: any;
  description?: any;
};

export const SideBarItem: React.FC<Props> = (props: Props) => {
  const { title, description } = props;

  return (
    <Box paddingY={1}>
      <Typography variant="h5">{title}</Typography>
      {description && <Typography variant="h6">{description}</Typography>}
    </Box>
  );
};

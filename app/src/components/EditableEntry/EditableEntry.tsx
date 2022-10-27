import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

type Props = {
  value: string;
  onClickSubmit: Function;
  onClickCancel: Function;
} & typeof defaultProps;

const defaultProps = {
  isEditable: true,
};

export const EditableEntry: React.FC<Props> = (props: Props) => {
  const { onClickSubmit, onClickCancel, value, isEditable } = props;
  const [editValue, setEditValue] = React.useState<string>(value);

  return (
    <Box display="flex" justifyContent="center">
      <IconButton
        size="small"
        onClick={() => {
          onClickCancel();
        }}
        color="primary"
      >
        <ClearIcon fontSize="small" />
      </IconButton>
      <TextField
        sx={{ width: '100px' }}
        value={editValue}
        onChange={({ target }) => setEditValue(target.value)}
      />
      <IconButton
        size="small"
        onClick={(event) => {
          event.stopPropagation();
          if (isEditable && onClickSubmit) {
            onClickSubmit(editValue);
          }
        }}
      >
        <SendIcon fontSize="small" color="secondary" />
      </IconButton>
    </Box>
  );
};

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  name?: string;
  listItem?: any;
  labelId?: string;
  id?: string;
  value?: any;
  setItemPerPage?: any;
}

const SelectC = (props: Props) => {
  const [value, setValue] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    setValue(event.target.value);
    props.setItemPerPage(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl sx={{ marginTop: '10px' }}>
      <InputLabel>{props.name}</InputLabel>
      <Select
        labelId={props.labelId}
        id={props.id}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value}
        label={props.name}
        onChange={handleChange}
        defaultValue={10}
      >
        {props.listItem.map((item: any) => {
          return (
            <MenuItem key={item.id} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectC;

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  name?: string;
  data?: any;
  labelId?: string;
  id?: string;
  value?: any;
  field?: any;
  setFieldValue?: any;
  setItemPerPage?: any;
  classFormName?: string;
  classSelectName?: string;
  classItemName?: string;
}

const SelectC = (props: Props) => {
  const [value, setValue] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    setValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl sx={{ marginTop: '10px' }} className={props.classFormName}>
      <InputLabel>{props.name}</InputLabel>
      <Select
        className={props.classSelectName}
        labelId={props.labelId}
        id={props.id}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value}
        label={props.name}
        onChange={(event: SelectChangeEvent<typeof value>) => {
          handleChange(event);
          props.setItemPerPage && props.setItemPerPage(event.target.value);
          props.setFieldValue && props.setFieldValue(props.field.name, event.target.value);
        }}
      >
        {props.data.map((item: any) => {
          return (
            <MenuItem className={props.classItemName} key={item.id} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectC;

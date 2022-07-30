import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

interface Props {
  data?: any;
  field?: any;
  setFieldValue: (field: string, value: any) => void;
}

const NativeSelectC = (props: Props) => {
  return (
    <FormControl fullWidth>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: 'age',
          id: 'uncontrolled-native',
        }}
        onChange={(event: React.ChangeEvent<any>) =>
          props.setFieldValue(props.field.name, event.target.value)
        }
      >
        {props.data.map((item: any) => {
          return (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default NativeSelectC;

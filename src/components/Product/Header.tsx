import React from 'react';
import { visuallyHidden } from '@mui/utils';
import { TableCell, TableSortLabel, Box } from '@mui/material';
import { CheckBoxC } from '../Checkbox/Checkbox';
import { labelProductTable } from '../../ultis/labelTable';
import { IProduct } from '../../interface/product';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  rowCount?: any;
  order_by?: string;
  setOpacityAll?: any;
  sort?: 'asc' | 'desc';
  isOpacityAll?: boolean;
  product?: IProduct[];
  handleSelectAll(check: boolean): void;
}

const useStyles = makeStyles((theme) => ({
  tableCell: {
    padding: '8px 8px 8px 16px',
  },
}));

const TableLabelC = (props: Props) => {
  const classes = useStyles();
  const { order_by, sort, handleSelectAll } = props;

  return (
    <>
      <TableCell className={classes.tableCell} width="60px">
        <CheckBoxC
          color="primary"
          onChange={(e, check) => handleSelectAll(check)}
          inputProps={{
            'aria-label': 'select all desserts',
          }}
        />
      </TableCell>
      {labelProductTable.map((item) => {
        if (!item.canSort)
          return (
            <TableCell
              className={classes.tableCell}
              key={item.name}
              align="left"
              width={item.minWidth}
            >
              <span>{item.name}</span>
            </TableCell>
          );
        return (
          <TableCell
            className={classes.tableCell}
            key={item.name}
            align="left"
            width={item.minWidth}
            sortDirection={order_by === item.name ? sort : false}
          >
            <TableSortLabel
              active={order_by === item.name}
              direction={order_by === item.name ? sort : 'asc'}
              // onClick={() => handleSort(item.name)}
            >
              <span>{item.name}</span>
              {order_by === item.name ? (
                <Box component="span" sx={visuallyHidden}>
                  {sort === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        );
      })}
      <TableCell align="left" className={classes.tableCell}></TableCell>
    </>
  );
};

export default TableLabelC;

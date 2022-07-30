import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { perPage } from '../../page/Product/utils';
import SelectC from '../Select/Select';
import { Box } from '@mui/material';

export const themePagination = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          padding: '20px 12px 0',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            border: '1px solid',
            borderRadius: '1px',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '12px 0',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: '108px',
          textAlign: 'center',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: '-2px',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#023e8a',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0!important',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          display: 'block!important',
          padding: '4px 0 !important',
          textAlign: 'center',
          '&.Mui-selected': {
            background: '#adb5bd',
            '&:hover': {
              background: '#dee2e6',
            },
          },
          '&:hover': {
            background: '#dee2e6',
          },
        },
      },
    },
  },
});

interface Props {
  count: any;
  totalItem: number;
  setPageNum: any;
  setItemPerPage: any;
}

const PaginationTableC = (props: Props) => {
  const { count, setPageNum, setItemPerPage, totalItem } = props;

  const handleChangePage = (_event: any, page: any) => {
    setPageNum(page);
  };
  return (
    <ThemeProvider theme={themePagination}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
          padding: '16px 0 12px',
        }}
      >
        <SelectC name="Per page" data={perPage} setItemPerPage={setItemPerPage} />
        <Box sx={{ margin: '12px 20px 0 40px' }}>
          <span style={{ paddingLeft: '6px' }}>Total: </span>
          <span style={{ fontWeight: 'bold', paddingLeft: '6px' }}>{totalItem}</span>
          <span style={{ paddingLeft: '6px' }}>items</span>
        </Box>
        <Stack spacing={2}>
          <Pagination
            count={count}
            variant="outlined"
            shape="rounded"
            onChange={handleChangePage}
          />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default PaginationTableC;

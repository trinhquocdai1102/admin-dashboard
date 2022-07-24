import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { perPage } from './utils';
import SelectC from '../../components/Select/Select';
import { Box } from '@mui/material';

const theme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          padding: '20px 12px 0',
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
          width: '100px',
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
  setPageNum: any;
  pageNum: number;
  itemPerPage: number;
  setItemPerPage: any;
}

const PaginationTable = (props: Props) => {
  const { count, itemPerPage, pageNum, setPageNum, setItemPerPage } = props;

  const handleChangePage = (event: any, page: any) => {
    setPageNum(page);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
          padding: '16px 0 12px',
        }}
      >
        <SelectC name="Per Page" listItem={perPage} setItemPerPage={setItemPerPage} />
        <Box sx={{ margin: '12px 20px 0 40px' }}>
          {itemPerPage * pageNum} of {count * itemPerPage}
          <span style={{ fontWeight: 'bold', paddingLeft: '6px' }}>items</span>
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

export default PaginationTable;

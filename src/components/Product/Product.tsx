import React, { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { TableCell } from '@mui/material';
import { Button, TableRow } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { CheckBoxC } from '../Checkbox/Checkbox';
import { ROUTESNAME } from '../../routing';
import { IProduct } from '../../interface/product';
import ModalC from '../Modal/Modal';

interface Props {
  labelId?: any;
  product: IProduct;
  isOpacityAll: boolean;
  // handleSelectSingle(id: string): void;
  handleDeleteItem(id: string): void;
}

const ProductTableC = (props: Props) => {
  const { product, labelId, isOpacityAll, handleDeleteItem } = props;
  const [isOpacity, setOpacity] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [dataDelete, setDataDelete] = useState('');

  return (
    <>
      <TableRow
        key={product.id}
        className={isOpacity || isOpacityAll ? 'opacity' : ''}
        sx={{
          borderBottom: '1px solid black',
        }}
      >
        <TableCell>
          <div style={{ display: 'flex', alignItems: 'center', borderRight: '1.5px dashed #bbb' }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                borderRight: '1px solid #fff',
                paddingRight: '10px',
                height: '20px',
              }}
            >
              <CheckBoxC
                onChange={() => {
                  // handleSelectSingle(product.id);
                }}
                color="primary"
                checked={product.checked}
                inputProps={{
                  'aria-labelledby': labelId,
                }}
              />
            </span>
          </div>
        </TableCell>
        <TableCell>{product?.id}</TableCell>
        <TableCell>
          <Link to={`${ROUTESNAME.productDetail}/${product.id}`}>{product?.name}</Link>
        </TableCell>
        <TableCell>{product?.description}</TableCell>
        <TableCell>{product?.color}</TableCell>
        <TableCell>${product?.price}</TableCell>
        <TableCell>{product?.amount}</TableCell>
        <TableCell>{moment(new Date(+product?.createdAt)).format('MMM DD,YYYY')}</TableCell>
        <TableCell>
          <div style={{ borderLeft: '1px dashed #bbb', paddingLeft: '10px' }}>
            <Button
              value={product?.id}
              variant="text"
              style={{
                display: 'flex',
                width: '36px',
                height: '36px',
                borderRadius: '4px',
                background: '#b18aff',
                justifyContent: 'center',
              }}
              onClick={() => {
                setOpacity(!isOpacity);
                setOpenModal(true);
                setDataDelete(product?.id);
              }}
            >
              <DeleteOutlineOutlinedIcon style={{ fontSize: '24px', color: '#fff' }} />
            </Button>
          </div>
        </TableCell>
        <ModalC
          message="Are you sure you want to delete this item?"
          openModal={openModal}
          handleEvent={handleDeleteItem}
          data={dataDelete}
          width={600}
          setOpenModal={setOpenModal}
        />
      </TableRow>
    </>
  );
};

export default ProductTableC;

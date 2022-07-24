import React, { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Modal, TableCell } from '@mui/material';
import { Button, TableRow } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ROUTESNAME } from '../../routing';
import { CheckBoxC } from '../../components/Checkbox/Checkbox';
import { IProduct } from '../../interface/product';

interface Props {
  labelId?: any;
  product: IProduct;
  isOpacityAll: boolean;
  // handleSelectSingle(id: string): void;
  // handleChooseToDelete(id: string): void;
  // handleChangeValue(data: { price: string; stock: string; id: string }, index: number): void;
}

const ProductTable = (props: Props) => {
  const { product, labelId, isOpacityAll } = props;
  const [changeBg, setChangeBg] = useState(true);
  const [isOpacity, setOpacity] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const [inputValue, setInputValue] = React.useState({
    price: product.price,
    amount: product.amount,
    id: product.id,
  });

  return (
    <>
      <TableRow
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
          <Link to={`${ROUTESNAME.home}/${product.id}`}>{product?.name}</Link>
        </TableCell>
        <TableCell>{product?.description}</TableCell>
        <TableCell>{product?.color}</TableCell>
        <TableCell>${product?.price}</TableCell>
        <TableCell>{product?.amount}</TableCell>
        <TableCell>{moment(new Date(+product?.createdAt * 1000)).format('MMM DD,YYYY')}</TableCell>
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
                // handleChooseToDelete(product?.id);
              }}
            >
              <DeleteOutlineOutlinedIcon style={{ fontSize: '24px', color: '#fff' }} />
            </Button>
          </div>
        </TableCell>
      </TableRow>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="confirm-modal">
          <div
            className="behind-modal"
            onClick={() => {
              setOpenModal(false);
            }}
          ></div>
          <div className="confirm-modal-content">
            <div className="modal-content-text">
              <div>Confirm Update</div>
              <div>Do you want to update this product?</div>
            </div>
            <div className="modal-button">
              <Button
                className="btn-table-common btn-modal-yes"
                onClick={() => {
                  setOpenModal(false);
                  // handleClickToUpdate(product.id, !(product.enabled == '1'));
                }}
              >
                Yes
              </Button>
              <Button
                className="btn-table-common btn-modal-no"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                No
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductTable;

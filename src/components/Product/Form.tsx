import { Box, List, ListItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputC from '../Input/Input';
import ProgressLoading from '../Loading/Loading';
import { ICreateProduct } from '../../interface/product';
import TextareaC from '../Textarea/Texarea';
import ModalC from '../Modal/Modal';
import { FastField, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { requiredField } from '../../ultis';

interface Props {
  loading: boolean;
  type?: string;
  initialValues: ICreateProduct;
  onSubmit(data: ICreateProduct): void;
}

const ProductFormC = (props: Props) => {
  const { onSubmit, loading, type, initialValues } = props;
  const [openModal, setOpenModal] = useState(false);
  const [urlValue, setUrlValue] = useState('');
  const [showErrorFile, setShowErrorFile] = useState(false);

  console.log(showErrorFile);

  const isAdd = type === 'add';
  const submitName = isAdd ? 'add product' : 'update product';

  const isRequired = true ? <span className="isRequired"> *</span> : '';

  const validationSchema = Yup.object().shape({
    categoryId: Yup.string().required(requiredField).nullable(),
    id: Yup.string().required(requiredField),
    name: Yup.string().required(requiredField),
    description: Yup.string().required(requiredField),
    price: Yup.number().required(requiredField),
    color: Yup.string().required(requiredField),
    amount: Yup.number().required(requiredField),
    thumbnailUrl: Yup.string().required(requiredField),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formikProps) => {
        const { values, errors, resetForm } = formikProps;

        return (
          <Form>
            <List className="container" component="nav" aria-label="mailbox folders">
              <ListItem className="section categoryId">
                <Box>Category ID {isRequired}</Box>
                <Box>
                  <FastField name="categoryId" component={InputC} />
                  <Typography className="errorMessage">
                    {errors ? errors?.categoryId : ''}
                  </Typography>
                </Box>
              </ListItem>
              <ListItem className="section ID">
                <Box>ID {isAdd && isRequired}</Box>
                <Box>
                  <FastField name="id" component={InputC} disabled={!isAdd} />
                  <Typography className="errorMessage">{errors ? errors?.id : ''}</Typography>
                </Box>
              </ListItem>
              <ListItem className="section name">
                <Box>Name {isRequired}</Box>
                <Box>
                  <Box>
                    <FastField name="name" component={InputC} />
                    <Typography className="errorMessage">{errors ? errors?.name : ''}</Typography>
                  </Box>
                </Box>
              </ListItem>
              <ListItem className="section description">
                <Box>Description {isRequired}</Box>
                <Box>
                  <Box>
                    <FastField name="description" component={TextareaC} />
                    <Typography className="errorMessage">
                      {errors ? errors?.description : ''}
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
              <ListItem className="section color">
                <Box>Color {isRequired}</Box>
                <Box>
                  <FastField name="color" component={InputC} />
                  <Typography className="errorMessage">{errors ? errors?.color : ''}</Typography>
                </Box>
              </ListItem>
              <ListItem className="section price">
                <Box>Price $ {isRequired}</Box>
                <Box>
                  <FastField name="price" component={InputC} />
                  <Typography className="errorMessage">{errors ? errors?.price : ''}</Typography>
                </Box>
              </ListItem>

              <ListItem className="section amount">
                <Box>Amount {isRequired}</Box>
                <Box>
                  <FastField name="amount" component={InputC} />
                  <Typography className="errorMessage">{errors ? errors?.amount : ''}</Typography>
                </Box>
              </ListItem>
              <ListItem className="section thumbnailUrl">
                <Box>Thumbnail URL {isRequired}</Box>
                <Box>
                  <FastField name="thumbnailUrl" component={InputC} setValue={setUrlValue} />
                  <Box className="box-image">
                    {urlValue === '/fallback-product-image.png' ? (
                      <img src="/fallback-product-image.png" alt="error" />
                    ) : (
                      <img
                        src={urlValue ? urlValue : initialValues?.thumbnailUrl}
                        alt=""
                        onError={() => setUrlValue('/fallback-product-image.png')}
                      />
                    )}

                    <button
                      className="buttonPreview"
                      type="button"
                      onClick={() => setUrlValue(values.thumbnailUrl)}
                    >
                      Preview Image
                    </button>
                  </Box>
                  <Typography className="errorMessage">
                    {errors ? errors?.thumbnailUrl : ''}
                  </Typography>
                </Box>
              </ListItem>
              <ListItem className="boxButton">
                <button className="addButton" type="submit">
                  {loading ? <ProgressLoading size={28} /> : submitName}
                </button>
                {!isAdd ? (
                  <></>
                ) : (
                  <button
                    className="resetButton"
                    onClick={() => {
                      setOpenModal(true);
                    }}
                    type="button"
                  >
                    reset
                  </button>
                )}
              </ListItem>
            </List>
            <ModalC
              message="Are you sure you want to reset the data?"
              openModal={openModal}
              handleEvent={() => resetForm()}
              width={600}
              setOpenModal={setOpenModal}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProductFormC;

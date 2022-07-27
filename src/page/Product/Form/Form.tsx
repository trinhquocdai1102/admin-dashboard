import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import InputC from '../../../components/Input/Input';
import ProgressLoading from '../../../components/Loading/Loading';
import { ICreateProduct } from '../../../interface/product';
import { required } from '../utils';
import TextareaC from '../../../components/Textarea/Texarea';
import ModalC from '../../../components/Modal/Modal';
import DropzoneC from '../../../components/Dropzone/Dropzone';
import { FastField, Formik, Form } from 'formik';
import * as Yup from 'yup';

interface Props {
  loading: boolean;
  type?: string;
  initialValues: ICreateProduct;
  onSubmit(data: ICreateProduct): void;
}

const ProductForm = (props: Props) => {
  const { onSubmit, loading, type, initialValues } = props;
  const [openModal, setOpenModal] = React.useState(false);
  const submitName = type === 'add' ? 'add product' : 'update product';

  const isRequired = true ? <span className="isRequired"> *</span> : '';

  const validationSchema = Yup.object().shape({
    categoryId: Yup.string().required(required).nullable(),
    id: Yup.string().required(required),
    name: Yup.string().required(required),
    description: Yup.string().required(required),
    price: Yup.number().required(required),
    color: Yup.string().required(required),
    amount: Yup.number().required(required),
    // thumbnailUrl: Yup.string().when('thumbnailUrl', {
    //   is: 1,
    //   then: Yup.string().required('This field is required.'),
    //   otherwise: Yup.string().notRequired(),
    // }),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formikProps) => {
        const { errors, resetForm } = formikProps;

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
                <Box>ID {isRequired}</Box>
                <Box>
                  <FastField name="id" component={InputC} />
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
                  <FastField name="thumbnailUrl" component={DropzoneC} />
                  <Typography className="errorMessage">
                    {errors ? errors?.thumbnailUrl : ''}
                  </Typography>
                </Box>
              </ListItem>
              <ListItem className="boxButton">
                <button className="addButton" type="submit">
                  {loading ? <ProgressLoading size={28} /> : submitName}
                </button>
                {type !== 'add' ? (
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

export default ProductForm;

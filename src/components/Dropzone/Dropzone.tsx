import CameraAltIcon from '@mui/icons-material/CameraAlt';
import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Box, List, ListItem } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { ICreateProduct } from '../../interface/product';

interface Props {
  name: 'thumbnailUrl';
  dataDetail?: ICreateProduct;
  handleRemoveImg?: (id: number) => void;
}

const DropzoneC = (props: Props) => {
  const { name, dataDetail, handleRemoveImg } = props;
  const [images, setImages] = useState<any[]>([]);
  const [imgId, setImgId] = useState<number[]>([]);
  const [valueImg, setValueImg] = useState<any[]>([]);
  const [defaultLength, setDefaultLength] = useState(0);

  const handleDropImg = (value: File[]) => {
    if (value) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImages((curr) => [...curr, reader.result]);
      });
      reader.readAsDataURL(value[0]);
    }
  };

  const handleRemoveImgUpload = (value: File[], index: number) => {
    let newData;
    if (index >= defaultLength) {
      const valueIndex = index - defaultLength >= 0 ? index - defaultLength : 0;
      newData = value.filter((_item, i) => +i !== valueIndex);
    } else {
      newData = dataDetail ? value : value.filter((_item, i) => i !== index);
    }
    if (dataDetail && handleRemoveImg && imgId[index]) {
      handleRemoveImg(imgId[index]);
      setImgId((prev) => prev.filter((item) => item !== imgId[index]));
    }
    setImages((prev) => prev.filter((_item, i) => i !== index));
    setValueImg(newData);
    return newData;
  };

  const handleUpload = (file: File[]) => {
    const result = [...valueImg, file];
    setValueImg((prev) => [...prev, file]);
    console.log(result);
    return result;
  };

  // useEffect(() => {
  //   if (dataDetail && dataDetail.images[0]) {
  //     setImages(() => {
  //       const temp = dataDetail.images.map((item) => {
  //         return item.thumbs[1];
  //       });
  //       return temp;
  //     });
  //     setImgId(dataDetail.images.map((item) => +item.id));
  //     setDefaultLength(dataDetail.images.length);
  //     setValueImg([]);
  //   }
  //   return;
  // }, [dataDetail]);

  return (
    <>
      <>
        <Box>
          <List className="list">
            {images.map((image: any, index: number) => (
              <ListItem key={index} className="list-item">
                <img src={image} alt="" />
                <div
                  onClick={() => {
                    // onChange(handleRemoveImgUpload(value, index));
                  }}
                >
                  <CancelIcon fontSize="small" className="cancelIcon" />
                </div>
              </ListItem>
            ))}
            <ListItem className="list-item">
              <Dropzone
                multiple={true}
                onDropAccepted={(file: File[]) => {
                  handleDropImg(file);
                  handleUpload(file);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()} className="add-image-box">
                    <CameraAltIcon />
                    <div className="border-camera-icon"></div>
                    <input {...getInputProps()} type="file" multiple={true} name={name} />
                  </div>
                )}
              </Dropzone>
            </ListItem>
          </List>
        </Box>
      </>
    </>
  );
};

export default DropzoneC;

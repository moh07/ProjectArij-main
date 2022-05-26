import React, { useState } from 'react';
import { Upload } from 'antd';
import "antd/dist/antd.css"
import ImgCrop from 'antd-img-crop';
import { RcFile, UploadProps } from 'antd/es/upload';

export const
  UploadImage = (props) => {
    const [fileList, setFileList] = useState([
    ]);

    const handleChange= ({ fileList: newFileList }) =>
    setFileList(newFileList);
    {  props.setfileList(fileList)
      console.log(FileList)
    };

    const onPreview = async file => {
      let src = file.url;
      if (!src) {
        src = await new Promise(resolve => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow.document.write(image.outerHTML);
    };

    return (
      <ImgCrop rotate>
        <Upload
          name="photo"
          action="http://localhost:4000/"
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
          onPreview={onPreview}
        >
          {fileList.length < 3 && '+ Upload'}
        </Upload>
      </ImgCrop>
    );
  };

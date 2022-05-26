import React, { CSSProperties, ReactElement } from 'react';
import { Form, Input } from 'antd';
import Col, { ColProps as AntColProps } from 'antd/lib/col';
import { FormItemProps } from 'antd/lib/form';

type ColProps =
  | ({ col?: true } & Pick<
      AntColProps,
      'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    >)
  | { col?: false };

export type FormInputProps = Omit<
  FormItemProps<any>,
  'label' | 'children' | 'required'
> &
  ColProps & {
    children?: ReactElement;
    /**
     * If not provided, `name` will be used as `comcode`
     */
    comcode?: string;
    fullWidth?: boolean;
    noMargin?: boolean;
    colStyle?: {};
  };

const FormInput = ({
  children = <Input />,
  col,
  comcode,
  fullWidth = true,
  rules: rulesProp = [],
  style: styleProp = {},
  colStyle = {},
  noMargin = false,
  ...otherProps
}: FormInputProps) => {


  let formItemStyle: CSSProperties = {};
  if (noMargin) {
    formItemStyle.margin = 0;
  }

  const input = (
    <Form.Item
      style={formItemStyle}
    >
      {React.cloneElement(children)}
    </Form.Item>
  );

  if (col) {
    return <Col style={colStyle}>{input}</Col>;
  } else {
    return input;
  }
};

export default FormInput;

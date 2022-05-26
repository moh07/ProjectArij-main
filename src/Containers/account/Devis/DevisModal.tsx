import { Modal } from 'antd';
import React from 'react';
import TraiterDevis from './TraiterDevis';


export type DevisModalProps = {
  visible: boolean;
  onCancel: () => void;
  record?: any;
  refetch:() => void
};

const DevisModal = ({
  onCancel,
  visible,
  record,
  refetch
}: DevisModalProps) => {
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      width={1200}
      afterClose={refetch}
      destroyOnClose
      footer={null}
    >
      <TraiterDevis
        record={record}
        close={onCancel}
      />
    </Modal>
  );
};

export default DevisModal;

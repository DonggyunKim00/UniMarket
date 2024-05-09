import React from 'react';
import Otp from './Otp';
import Register from './Register';
import useProcessIdxStore from '../../../../store/modal/processIdx';

const ProcessModal = () => {
  const { idx } = useProcessIdxStore();

  switch (idx) {
    case 1:
      return <Otp />;
    default:
      return <Register />;
  }
};

export default ProcessModal;

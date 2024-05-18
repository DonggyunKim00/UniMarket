import React from 'react';
import Otp from './Otp';
import Register from './Register';
import useProcessIdxStore from '../../../../store/modal/processIdx';
import SchoolInput from './SchoolInput';

const ProcessModal = () => {
  const { idx } = useProcessIdxStore();

  switch (idx) {
    case 0:
      return <SchoolInput />;
    case 1:
      return <Register />;
    case 2:
      return <Otp />;
    default:
      return null;
  }
};

export default ProcessModal;

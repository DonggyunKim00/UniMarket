import React from 'react';
import { styled } from 'styled-components';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from 'react-router-dom';

const ProductHeader = ({ ...props }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div
        style={{
          position: 'absolute',
          left: 0,
        }}
      >
        <UndoIcon
          sx={{ cursor: 'pointer', fontSize: 30 }}
          onClick={() => navigate(-1)}
        />
      </div>
      <h2>{props.title}</h2>
    </Container>
  );
};

export default ProductHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

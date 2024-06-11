import React, { useState } from 'react';
import PageWrapper from '../components/common/PageWrapper';
import { styled } from 'styled-components';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import divideNum from '../libs/divideNum';

const Register = () => {
  const [price, setPrice] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [describe, setDescribe] = useState<string>('');
  const navigate = useNavigate();
  const undoClick = () => {
    navigate(-1);
  };
  const handleButtonClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };
  const priceChangeHandler = (event: any) => {
    let price = event.target.value;
    let dividedPrice = Number(price.replaceAll(',', ''));
    if (isNaN(dividedPrice)) {
      setPrice('');
    } else {
      setPrice(divideNum(dividedPrice));
    }
  };

  const onTitleChange = (event: any) => {
    setTitle(event.target.value);
  };
  const onDescribeChange = (event: any) => {
    setDescribe(event.target.value);
  };

  return (
    <PageWrapper>
      <Wrapper>
        <Header>
          <div
            style={{
              position: 'absolute',
              left: 0,
            }}
          >
            <UndoIcon
              sx={{ cursor: 'pointer', fontSize: 30 }}
              onClick={() => undoClick()}
            />
          </div>
          <h2>물품등록</h2>
        </Header>
        <ImageLine>
          <Button onClick={handleButtonClick} color="color">
            <h2>사진</h2>
            <AddIcon sx={{ color: 'black' }} />
          </Button>
          <ImageInput type="file" multiple accept="image/*" id="fileInput" />
        </ImageLine>
        <InputLine>
          <h2>제목 </h2>
          <TitleInput
            value={title}
            onChange={onTitleChange}
            placeholder="제목을 입력해주세요"
          />
          <p>상품 설명란</p>
          <DescribeInput
            value={describe}
            onChange={onDescribeChange}
            placeholder="최대한 자세하게 설명을 적어주세요(사이즈,상태)"
          />
          <p>시작 입찰가</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <StartBidInput
              type="text"
              value={price}
              onChange={priceChangeHandler}
              placeholder="시작금액"
            />
            원
          </div>
        </InputLine>
        <RegistButton>완료</RegistButton>
      </Wrapper>
    </PageWrapper>
  );
};

export default Register;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ImageInput = styled.input`
  display: none;
`;

const Button = styled.button`
  width: 150px;
  height: 150px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  background-color: gray;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
const ImageLine = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputLine = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleInput = styled.input`
  border: none;
  outline: none;
  height: 60px;
  background-color: #d9cfcf;
  border-radius: 25px;
  padding: 5px;
  font-size: 20px;
`;
const DescribeInput = styled.textarea`
  font-size: 12px;
  padding: 12px;
  border: none;
  outline: none;
  height: 100px;
  background-color: #d9cfcf;
  border-radius: 30px;
  resize: none;
  overflow-y: scroll;
  scrollbar-width: none;
`;
const StartBidInput = styled.input`
  text-align: right;
  border-radius: 15px;
  font-size: 15px;
  display: block;
  width: 150px;
  outline: none;
  border: none;
  background-color: #18181b;
  height: 40px;
  color: white;
  ::placeholder {
    color: white;
  }
`;
const RegistButton = styled.div`
  background-color: red;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
  margin-top: 100px;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

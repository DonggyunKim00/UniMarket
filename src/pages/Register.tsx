import React, { useState } from 'react';
import PageWrapper from '../components/common/PageWrapper';
import styled from 'styled-components';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import divideNum from '../libs/divideNum';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { getClient } from '../libs/supabase';
import { useGetAuthUser } from '../hooks/query/useAuth';

const Register = () => {
  const [price, setPrice] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [describe, setDescribe] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();
  const { supabase } = getClient();
  const undoClick = () => {
    navigate(-1);
  };

  const UUID = useGetAuthUser().data?.user.id;

  const handleButtonClick = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const priceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let price = event.target.value;
    let dividedPrice = Number(price.replaceAll(',', ''));
    if (isNaN(dividedPrice)) {
      setPrice('');
    } else {
      setPrice(divideNum(dividedPrice));
    }
  };

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onDescribeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescribe(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const onImageDeleteButtonClick = () => {
    setPreview(null);
  };

  const handleSubmit = async () => {
    if (!title || !describe || !price || !image) {
      alert('모든 필드를 채워주세요.');
      return;
    }
    const sanitizedFileName = image.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    try {
      const { data, error: uploadError } = await supabase.storage
        .from('images')
        .upload(`images/${sanitizedFileName}`, image, {
          cacheControl: '3600',
          upsert: false,
        });
      if (uploadError) {
        alert('이미지 업로드 중 오류가 발생했습니다.');
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from('images')
        .getPublicUrl(`images/${sanitizedFileName}`);

      const publicURL = publicUrlData?.publicUrl;

      if (!publicURL) {
        alert('공용 URL을 가져오는 중 오류가 발생했습니다.');
        return;
      }

      const numericPrice = Number(price.replace(/,/g, ''));

      const { error: insertError } = await supabase.from('product').insert([
        {
          title: title,
          describe: describe,
          min_price: numericPrice,
          photo: publicURL,
          owner_id: UUID,
        },
      ]);

      if (insertError) {
        alert('데이터 삽입 중 오류가 발생했습니다.');
        return;
      }

      alert('물품 등록이 완료되었습니다.');
      navigate('/');
    } catch (error) {
      alert('등록 중 오류가 발생했습니다.');
    }
  };
  console.log(image);
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
              onClick={undoClick}
            />
          </div>
          <h2>물품 등록</h2>
        </Header>
        <ImageLine>
          {preview ? (
            <div style={{ display: 'flex', position: 'relative' }}>
              <PreviewImageDeleteButton onClick={onImageDeleteButtonClick}>
                <RemoveCircleOutlineIcon sx={{ color: 'red' }} />
              </PreviewImageDeleteButton>
              <PreviewImage src={preview} alt="미리보기" />
            </div>
          ) : (
            <Button onClick={handleButtonClick}>
              <h2>사진</h2>
              <AddIcon sx={{ color: 'black' }} />
            </Button>
          )}

          <ImageInput
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleImageChange}
          />
        </ImageLine>
        <InputLine>
          <h2>제목</h2>
          <TitleInput
            value={title}
            onChange={onTitleChange}
            placeholder="제목을 입력해주세요"
          />
          <p>상품 설명란</p>
          <DescribeInput
            value={describe}
            onChange={onDescribeChange}
            placeholder="최대한 자세하게 설명을 적어주세요(사이즈, 상태)"
          />
          <p>시작 입찰가</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <StartBidInput
              type="text"
              value={price}
              onChange={priceChangeHandler}
              placeholder="시작 금액"
            />
            원
          </div>
        </InputLine>
        <RegistButton onClick={handleSubmit}>완료</RegistButton>
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
  gap: 10px;
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

const PreviewImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;
const PreviewImageDeleteButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

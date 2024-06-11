import styled from 'styled-components';

const ToggleButton = ({ ...props }) => {
  return (
    <Wrapper>
      {props.isOn === false ? (
        <span className="OFF">경매 전</span>
      ) : (
        <span className="ON">경매 중</span>
      )}
      <ToggleContainer onClick={() => props.setisOn((prev: boolean) => !prev)}>
        <div
          className={`toggle-container ${props.isOn ? 'toggle--checked' : null}`}
        />
        <div
          className={`toggle-circle ${props.isOn ? 'toggle--checked' : null}`}
        />
      </ToggleContainer>
    </Wrapper>
  );
};

export default ToggleButton;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0px;
  margin-bottom: 30px;
  span {
    font-size: 20px;
    font-weight: 700;
  }
`;
const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: orange;
  }
  > .toggle--checked {
    background-color: rgb(0, 200, 102);
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 0.5s;
  }
  > .toggle--checked {
    left: 27px;
    transition: 0.5s;
  }
`;

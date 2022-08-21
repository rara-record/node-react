import styled from 'styled-components';
import { Form, Input, Button, Select } from 'antd';

import useInput from '../../hooks/useInput';
import useSelecter from '../../hooks/useSelecter';

import { useAppDispatch } from '../../store/hook';
import { shoppingAge } from '../../action/shopping';

const { Option } = Select;
const timeUnitData = ['month', 'week', 'date'];
const agesData = ['10', '20', '30', '40', '50', '60'];
const genderData = ['all', 'm', 'f'];
const deviceData = ['all', 'pc', 'mo'];

const FilterForm = () => {
  const dispatch = useAppDispatch();
  const [start, onChangeStart] = useInput('');
  const [end, onChangeEnd] = useInput('');
  const [category, onChangeCategory] = useInput('');
  const [keyword, onChangeKeyword] = useInput('');
  const [timeUnit, onChangeTimeUnit] = useSelecter(null);
  const [ages, onChangeAge] = useSelecter(null);
  const [gender, onChangeGender] = useSelecter(null);
  const [device, onChangeDevice] = useSelecter(null);

  const handleSubmitForm = () => {
    dispatch(
      shoppingAge({
        startDate: start,
        endDate: end,
        timeUnit: timeUnit,
        category: category,
        keyword: keyword,
        device: device,
        gender: gender,
        ages: ages,
      })
    );
  };

  return (
    <Form onFinish={handleSubmitForm}>
      <UserInputWrapper>
        <div>
          <label htmlFor="start">시작일자</label>

          <Input
            name="start"
            type="date"
            min="2017-08-01"
            value={start}
            onChange={onChangeStart}
            required
          />
        </div>

        <div>
          <label htmlFor="user-password">종료일자</label>

          <Input
            name="user-password"
            type="date"
            value={end}
            onChange={onChangeEnd}
            required
          />
        </div>

        <div>
          <label htmlFor="category">카테고리</label>
          <Input
            name="category"
            type="text"
            placeholder="50000000"
            value={category}
            onChange={onChangeCategory}
            required
          />
        </div>

        <div>
          <label htmlFor="keyword">키워드</label>
          <Input
            name="keyword"
            type="text"
            placeholder="정장"
            value={keyword}
            onChange={onChangeKeyword}
            required
          />
        </div>
      </UserInputWrapper>

      <UserSelecterWrapper>
        <Select
          placeholder="timeUnit"
          style={{ width: 120 }}
          onChange={onChangeTimeUnit}
        >
          {timeUnitData.map(item => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>

        <Select
          placeholder="ages"
          style={{ width: 300 }}
          mode="multiple"
          onChange={onChangeAge}
        >
          {agesData.map(item => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>

        <Select
          placeholder="gender"
          style={{ width: 120 }}
          onChange={onChangeGender}
        >
          {genderData.map(item => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>

        <Select
          placeholder="device"
          style={{ width: 120 }}
          onChange={onChangeDevice}
        >
          {deviceData.map(item => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>
      </UserSelecterWrapper>

      <ButtonWrapper>
        <Button type="primary" htmlType="submit">
          조회하기
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default FilterForm;

const UserInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  & input {
    padding: 0.5rem;
  }
`;

const UserSelecterWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  max-width: 500px;

  & input {
    padding: 0.5rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

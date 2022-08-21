import styled from 'styled-components';
import FilterForm from '../FilterForm';

const Header = () => {
  return (
    <Wrapper>
      <h1>어떤 키워드가 궁금하신가요?</h1>
      <FilterForm />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 2rem 5rem;
  background-image: linear-gradient(124deg, #1effd8, #13e989);

  & h1 {
    font-size: 2rem;
    color: #fff;
  }
`;

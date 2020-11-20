import styled from 'styled-components/native';

export const Container = styled.View`
  height: 72px;
  padding: 14px;
  margin: 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors['neutral-200']};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

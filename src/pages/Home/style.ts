import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountDownButton = styled.button`
  padding: 1rem;
  background: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme.white};
  width: 100%;
  border: 0;
  border-radius: 8px;
  display: flex;
  gap: 0.5rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

export const StartCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const StopCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`

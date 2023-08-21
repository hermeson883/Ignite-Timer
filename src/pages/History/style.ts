import { styled } from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  overflow-y: auto;

  table {
    width: 100%;
    text-align: centers;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      text-align: center;
      background: ${(props) => props.theme['gray-700']};
      border-radius: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6rem;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLOR = {
  green: 'green-500',
  red: 'red-500',
  yellow: 'yellow-500',
} as const // Permite que esse objeto tenha que ser somente green,red ou yellow, ou seja, não pode ser uma string qualquer

interface StatusProps {
  statuscolor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background: ${(props) => props.theme[STATUS_COLOR[props.statuscolor]]};
  }
`

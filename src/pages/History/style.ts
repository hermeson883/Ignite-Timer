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
      font-size: 0.875;
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

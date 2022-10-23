import styled from 'styled-components'

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 4rem;
`

export const SearchHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Subtitle = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: ${(props) => props.theme.fontSizes[18]};
`

export const PublishsCounts = styled.span`
  font-size: ${(props) => props.theme.fontSizes[14]};
  color: ${(props) => props.theme.colors['base-span']};
`

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors['base-border']};
  background-color: ${(props) => props.theme.colors['base-input']};
  padding: 12px 16px;
  color: ${(props) => props.theme.colors['base-text']};
  border-radius: 6px;

  ::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`

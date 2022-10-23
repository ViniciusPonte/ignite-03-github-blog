import styled from 'styled-components'

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;
`

export const CardContent = styled.div`
  width: 100%;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const Title = styled.h1`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes[24]};
  font-weight: bold;
  color: ${(props) => props.theme.colors['base-title']};
  line-height: 130%;
`

export const CardDescription = styled.div`
  margin-bottom: 1.5rem;
`

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

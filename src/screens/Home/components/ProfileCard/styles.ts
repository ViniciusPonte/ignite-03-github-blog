import styled from 'styled-components'

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;
`

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 0;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h1 {
    font-size: ${(props) => props.theme.fontSizes[24]};
    font-weight: bold;
    color: ${(props) => props.theme.colors['base-title']};
  }
`

export const CardDescription = styled.div`
  margin-bottom: 2.5rem;
`

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

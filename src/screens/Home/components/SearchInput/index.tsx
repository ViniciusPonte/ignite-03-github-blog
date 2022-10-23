import {
  PublishsCounts,
  SearchHeader,
  SearchWrapper,
  StyledInput,
  Subtitle,
} from './styles'

interface SearchInputProps {
  quantity: number
  search: string
  onChangeSearch: (newValue: string) => void
}

export function SearchInput({
  quantity,
  search,
  onChangeSearch,
}: SearchInputProps) {
  return (
    <SearchWrapper>
      <SearchHeader>
        <Subtitle>Publicações</Subtitle>
        <PublishsCounts>{quantity} publicações</PublishsCounts>
      </SearchHeader>
      <StyledInput
        placeholder="Buscar conteúdo"
        value={search}
        onChange={(e) => onChangeSearch(e.target.value)}
      />
    </SearchWrapper>
  )
}

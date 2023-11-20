import Icon from "/src/assets/svgs/Icon";

import {
  StyledSearchBar,
  StyledSearchBarInput,
  StyledSearchButton,
} from "./SearchBar.styles";

function SearchBar() {
  //TODO: Implement search functionality. The search results should be saved in a state named `results`.

  return (
    <StyledSearchBar>
      <StyledSearchButton>
        <Icon name="filter" height="12px" width="12px" />
      </StyledSearchButton>
      <StyledSearchBarInput placeholder="Type address..." />
      <StyledSearchButton>
        <Icon
          name="search"
          height="18px"
          width="18px"
          color="var(--color-grey-light-2)"
        />
      </StyledSearchButton>
      {/* {results && (
        <SearchResults results={results} onResultClick={onResultClickHandler} />
      )} */}
    </StyledSearchBar>
  );
}

export default SearchBar;

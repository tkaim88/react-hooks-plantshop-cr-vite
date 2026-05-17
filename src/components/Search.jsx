function Search({ onSearch }) {
  return (
    <>
      {/* Updates search state whenever the user types */}
      <input
        type="text"
        placeholder="Type a name to search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
}

export default Search;
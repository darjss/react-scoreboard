const DarkMode = ({ bool }, { setDark }) => {
  if (bool) {
    return <h1 onClick={setDark}>🌑</h1>;
  } else {
    return <h1 onClick={setDark}>🌕</h1>;
  }
};
export default DarkMode;

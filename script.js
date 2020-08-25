const changeTheme = () => {
  let themeSelector = document.querySelector("#themeselector");
  let link = document.querySelector("#themelink");
  link.href = themeSelector.checked ? "./dark.css" : "./light.css";
}
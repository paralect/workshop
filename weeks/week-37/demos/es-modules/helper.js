export const renderText = text => {
  const div = document.createElement('div');
  div.textContent = text;

  document.body.appendChild(div);
};

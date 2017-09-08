export const addButton = text => {
  const button = document.createElement('button');
  button.textContent = text;

  document.body.appendChild(button);

  return button;
};

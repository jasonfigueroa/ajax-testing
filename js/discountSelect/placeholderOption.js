const placeholderOption = () => {
  const defaultOption = document.createElement('option');
  defaultOption.value = 'select discount';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.innerHTML = 'select discount';

  return defaultOption;
};

module.exports = placeholderOption;

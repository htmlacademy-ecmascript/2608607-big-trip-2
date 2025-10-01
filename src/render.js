const RenderPosition = {
  BEFOREBEGIN: 'beforeBegin',
  AFTERBEGIN: 'afterBegin',
  BEFOREEND: 'beforeEnd',
  AFTEREND: 'afterEnd',
};

function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

/**
 * Renders a component into a container at the specified position.
 * @param {Object} component - The component instance with a getElement() method.
 * @param {Element} container - The DOM element to render into.
 * @param {string} place - The position relative to the container (use RenderPosition).
 */
function render(component, container, place = 'beforeEnd') {
  if (container && container.insertAdjacentElement) {
    container.insertAdjacentElement(place, component.getElement());
  } else {
    console.error('Invalid container provided for rendering:', container);
  }
}

export { RenderPosition, createElement, render };

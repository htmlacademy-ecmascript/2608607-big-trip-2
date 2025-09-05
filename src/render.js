const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
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
function render(component, container, place) {
  container.insertAdjacentElement(place, component.getElement());
}

export { RenderPosition, createElement, render };

export function isEditableElement(element) {
  return (
    element.matches && element.matches("input, textarea, [contenteditable]")
  );
}

export function isElementInViewport(element) {
  const box = element.getBoundingClientRect();
  return box.bottom >= 0 && box.top <= window.innerHeight;
}

export function isElementHidden(element) {
  return element.offsetParent === null;
}

export function isElementVisibleInViewport(element) {
  return !isElementHidden(element) && isElementInViewport(element);
}

export function clamp(n, x, y) {
  return Math.min(Math.max(n, x), y);
}

export function getLineHeight(element) {
  const computedStyle = window.getComputedStyle(element);
  const lineHeight = parseInt(computedStyle.lineHeight, 10);

  if (Number.isNaN(lineHeight)) {
    const clone = element.cloneNode();
    clone.innerHTML = "<br>";
    element.appendChild(clone);
    const singleLineHeight = clone.clientHeight;
    clone.innerHTML = "<br><br>";
    const doubleLineHeight = clone.clientHeight;
    element.removeChild(clone);
    const lineHeight = doubleLineHeight - singleLineHeight;
    return lineHeight;
  } else {
    return lineHeight;
  }
}

export function selectElementContent(element) {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);
}

export function smoothlyScrollToElement(element) {
  const { height } = element.getBoundingClientRect();

  if (height < window.innerHeight) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function isScrolledToEnd(element) {
  // See https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#determine_if_an_element_has_been_totally_scrolled
  return (
    Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) <
    1
  );
}

export function scrollToEnd(element) {
  element.scrollTop = element.scrollHeight;
}

/**
 * Generates a random string.
 */
export function randomId() {
  return randomString(24);
}

/**
 * Generates a random long string.
 */
export function randomToken() {
  return randomString(40);
}

function randomString(byteSize) {
  const array = new Uint8Array(byteSize);
  crypto.getRandomValues(array);
  const byteString = String.fromCharCode(...array);
  return btoa(byteString);
}

export function setFavicon(name) {
  let link = document.querySelector(`[rel="icon"]`);

  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }

  link.href = `/${name}.svg`;
}

export function findChildOrThrow(element, selector) {
  const child = element.querySelector(selector);

  if (!child) {
    throw new Error(
      `expected a child matching ${selector}, but none was found`
    );
  }

  return child;
}

export function cancelEvent(event) {
  // Cancel any default browser behavior.
  event.preventDefault();
  // Stop event propagation (e.g. so it doesn't reach the editor).
  event.stopPropagation();
}

const htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39",
};

/**
 * Transforms the given string to a HTML-safe value.
 */
export function escapeHtml(string) {
  return (string || "").replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}

// A simple debouncing function
export function debounce(context, fn, delay = 200) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

/**
 * A simple throttle version that ensures
 * the given function is called at most once
 * within the given time window.
 */
export function throttle(context, fn, limit) {
  let lastFunc;
  let lastRan;

  return (...args) => {
    if (!lastRan) {
      fn.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          fn.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

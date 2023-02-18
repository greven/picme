import topbar from "topbar";

// Show progress bar on live navigation and form submits
export function registerTopbar() {
  topbar.config({
    barColors: { 0: "#37cdbe" },
    barThickness: 3,
    shadowColor: "rgba(0, 0, 0, .3)",
    shadowBlur: 4,
  });

  window.addEventListener("phx:page-loading-start", (info) =>
    topbar.delayedShow(200)
  );
  window.addEventListener("phx:page-loading-stop", (info) => topbar.hide());
}

export function registerGlobalEventHandlers() {
  // --  Client events --

  // Client-pushed event js-exec to call a function with arguments.
  // Example: phx-click={js_exec("#my_id", "click", [])}
  window.addEventListener("js:exec", (e) =>
    e.target[e.detail.call](...e.detail.args)
  );

  // -- Server events --
  // Server-pushed event js-exec. It Receives a detail object with `to` and `attr`.
  // `to` is the element(s) selector(s) and `attr` the name of the HTML attribute
  // that embeds the JS command we want to trigger. Example:
  // push_event(socket, "js-exec", %{to: "#my_id", attr: "data-is-done" })
  window.addEventListener("phx:js-exec", ({ detail }) => {
    document.querySelectorAll(detail.to).forEach((el) => {
      liveSocket.execJS(el, el.getAttribute(detail.attr));
    });
  });

  window.addEventListener("js:focus", (event) => {
    // The element may be about to show up via JS.show, which wraps the
    // change in requestAnimationFrame, so we do the same to make sure
    // the focus is applied only after we change the element visibility
    requestAnimationFrame(() => {
      event.target.focus();
    });
  });

  window.addEventListener("js:set_value", (event) => {
    event.target.value = event.detail.value;
  });

  window.addEventListener("js:check", (event) => {
    event.target.checked = true;
  });

  window.addEventListener("js:uncheck", (event) => {
    event.target.checked = false;
  });

  window.addEventListener("js:set_text", (event) => {
    event.target.textContent = event.detail.value;
  });

  window.addEventListener("js:clipcopy", (event) => {
    if ("clipboard" in navigator) {
      const text = event.target.textContent;
      navigator.clipboard.writeText(text);
    } else {
      alert(
        "Sorry, your browser does not support clipboard copy.\nThis generally requires a secure origin — either HTTPS or localhost."
      );
    }
  });
}

// Trigger the JS command in `attr` for all the element(s) `selector`(s).
// Exmaple: execJS(`#${this.cards[i].id}`, 'data-js-close')
export function execJS(selector, attr) {
  document
    .querySelectorAll(selector)
    .forEach((el) => liveSocket.execJS(el, el.getAttribute(attr)));
}

window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  function recursy(el) {
    el.childNodes.forEach((node) => {
      // console.log(node);
      // if (el.childNodes.length > 1) {
      //     recursy(node);
      // }

      if (node.nodeName.match(/^A\d/)) {
        console.log(node);
      } else {
        recursy(node);
      }
    });
  }

  recursy(body);
});

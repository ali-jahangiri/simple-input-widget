// const input = document.querySelector("input");
// const icon = document.querySelector("i");
// const label = document.querySelector("label");

// input.addEventListener("input", (e) => {
//   if (e.target.value.trim().length !== 0) {
//     icon.style.visibility = "visible";
//     label.style.top = "-35%";
//   } else {
//     icon.style.visibility = "hidden";
//     label.style.top = "15%";
//   }
// });

// icon.addEventListener("click", (e) => {
//   input.value = "";
//   label.style.top = "15%";
//   e.target.style.visibility = "hidden";
// });

// other one (password input)
// const eye = document.querySelector(".eye__box");
// const input = document.querySelector("input");
// const icon = document.querySelector("i");

// eye.addEventListener("click", ({ currentTarget: { children } }) => {
//   if (!input.value) return;
//   const wantElement = children[1];
//   wantElement.classList.toggle("scale");
//   if (input.getAttribute("type") == "password") {
//     icon.className = "fas fa-eye-slash";
//     input.setAttribute("type", "text");
//     return;
//   }
//   input.setAttribute("type", "password");
//   icon.className = "fas fa-eye";
//   input.focus();
// });

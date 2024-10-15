let wrapper = document.querySelector('.wrapper');
let signup = document.querySelector('.signup-link');
let signin = document.querySelector('.signin-link');

signup.addEventListener('click', () => {
  wrapper.classList.add('signinAnim');
});

signin.addEventListener("click", () => {
  wrapper.classList.add("singupAnim");
  wrapper.classList.remove("singinAnim");
});

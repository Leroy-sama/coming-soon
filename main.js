const form = document.querySelector('form')
const input = document.querySelector('input')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkEmail()
})


const checkEmail = (e) => {
    const email = input.value;
    if (!validateEmail(email)) {
        console.log('invalid');
        input.classList.add('email-error')
    }   else {
        console.log('valid');
        input.classList.remove('email-error')
    }
    console.log(email);
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};






// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     validateInput()
// })

// const isValidEmail = (email) => {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
// };

// const validateInput = () => {
//     const emailValue = input.value.trim();
//     const error = document.querySelector('.error')

//     if (emailValue === '') {
//         console.log('email is empty')
//         error.innerText = 'Please provide a valid email address'
//         input.classList.add("email-error");
//     }   else if (isValidEmail(email)) {
//         console.log('email not valid')
//         error.innerText = "Please do not use us provide a valid email address";
//     }   else {
//         console.log('email is good')
//     }
// }


const form = document.getElementsByName('form')[0];

// console.log(form);

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const response = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }),
  });
  const responseJSON = await response.json();

  if (!responseJSON.isRegistratedSuccessful) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.innerText = responseJson.errorMessage;
    event.target.parentElement.append(errorDiv);
    return;
  }
  window.location = '/';
  // document.location.assign('http://localhost:3000');
});

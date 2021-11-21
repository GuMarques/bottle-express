var loginModal = document.getElementById('loginModal')
var loginButton = document.getElementById('loginButton')

loginModal.addEventListener('shown.bs.modal', function () {
    loginButton.focus()
})

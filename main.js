

function login(e) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    let user = {
        username: username,
        password: password
    };
    let json = JSON.stringify(user);
    localStorage.setItem(username, json)
    alert("đăng ký thành công")
}
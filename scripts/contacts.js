let txtName = document.getElementById('txtName');
let txtPhone = document.getElementById('txtPhone');
let btnSave = document.getElementById('btnSave');
let tableBody = document.getElementById('tableBody');
let users = [];

function displayUsers() {
    let usersMarkup = '';
    for(let i=0; i<users.length; i++) {
        let user = users[i]
        usersMarkup += '<tr><td>' + user.name + '</td>' + '<td>' + user.phone + '</td></tr>';
    }
    tableBody.innerHTML = usersMarkup;
}

btnSave.addEventListener('click', function() {
    let name = txtName.value;
    let phone = txtPhone.value;

    users.push({
        name: name,
        phone: phone
    })
    txtName.value = ''
    txtPhone.value = ''
    
    displayUsers()
});
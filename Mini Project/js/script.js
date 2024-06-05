const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const menuku = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!menuku.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    isValid &= validateField('username', 'Nama harus diisi');
    isValid &= validateField('tanggal', 'Tanggal lahir harus diisi');
    isValid &= validateJenis('jenis', 'Jenis kelamin harus dipilih');
    isValid &= validateField('pesan', 'Pesan harus diisi');

    if (isValid) {
        document.getElementById('conf-username').textContent = document.getElementById('username').value;
        document.getElementById('conf-tanggal').textContent = document.getElementById('tanggal').value;
        document.getElementById('conf-jenis').textContent = document.querySelector('input[name="jenis"]:checked').value;
        document.getElementById('conf-pesan').textContent = document.getElementById('pesan').value;
        document.getElementById('ingpokan').style.display = 'block';
    }
});

function validateField(id, message) {
    let field = document.getElementById(id);
    if (field.value.trim() === '') {
        field.nextElementSibling.textContent = message;
        return false;
    }
    return true;
}

function validateJenis(name, message) {
    if (!document.querySelector(`input[name="${name}"]:checked`)) {
        document.querySelector(`input[name="${name}"]`).closest('.input-control').querySelector('.error').textContent = message;
        return false;
    }
    return true;
}
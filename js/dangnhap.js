function validateForm() {
    var email = document.getElementById('Email').value.trim();
    var matKhau = document.getElementById('MatKhau').value;

    var errorMessages = [];

    if (email === '') {
        errorMessages.push("Vui lòng nhập Email");
        document.getElementById('Email').classList.add('error');
    } else {
        document.getElementById('Email').classList.remove('error');
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessages.push("Email không hợp lệ");
        document.getElementById('Email').classList.add('error');
    } else {
        document.getElementById('Email').classList.remove('error');
    }

    if (matKhau === '') {
        errorMessages.push("Vui lòng nhập Mật khẩu");
        document.getElementById('MatKhau').classList.add('error');
    } else {
        document.getElementById('MatKhau').classList.remove('error');
    }

    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));
    } else {
        window.location.href = 'index.html'; 
    }
}
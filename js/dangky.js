function validateForm() {
    var ho = document.getElementById('Ho').value.trim();
    var ten = document.getElementById('Ten').value.trim();
    var email = document.getElementById('Email').value.trim();
    var soDienThoai = document.getElementById('SoDienThoai').value.trim();
    var matKhau = document.getElementById('MatKhau').value;
    var nhapLaiMatKhau = document.getElementById('NhapLaiMatKhau').value;

    var errorMessages = [];

    if (ho === '') {
        errorMessages.push("Vui lòng nhập Họ");
        document.getElementById('Ho').classList.add('error');
    } else {
        document.getElementById('Ho').classList.remove('error');
    }

    if (ten === '') {
        errorMessages.push("Vui lòng nhập Tên");
        document.getElementById('Ten').classList.add('error');
    } else {
        document.getElementById('Ten').classList.remove('error');
    }

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

    var phoneRegex = /^\d{10}$/; 
    if (!phoneRegex.test(soDienThoai)) {
        errorMessages.push("Số điện thoại không hợp lệ");
        document.getElementById('SoDienThoai').classList.add('error');
    } else {
        document.getElementById('SoDienThoai').classList.remove('error');
    }

    if (matKhau === '') {
        errorMessages.push("Vui lòng nhập Mật khẩu");
        document.getElementById('MatKhau').classList.add('error');
    } else {
        document.getElementById('MatKhau').classList.remove('error');
    }

    if (nhapLaiMatKhau === '' || nhapLaiMatKhau !== matKhau) {
        errorMessages.push("Mật khẩu không khớp");
        document.getElementById('NhapLaiMatKhau').classList.add('error');
    } else {
        document.getElementById('NhapLaiMatKhau').classList.remove('error');
    }

    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));
    } else {
        window.location.href = 'index.html'; 
    }
}
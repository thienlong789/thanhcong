// Bắt sự kiện submit của form đăng nhập
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi submit form mặc định

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Giả lập thông tin đăng nhập đúng
    const correctUsername = 'admin';
    const correctPassword = '123456';

    // Kiểm tra đăng nhập
    if (username === correctUsername && password === correctPassword) {
        // Lưu trạng thái đăng nhập vào localStorage (hoặc sessionStorage nếu bạn muốn lưu trong session)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);

        // Cập nhật trạng thái đăng nhập
        document.getElementById('loginStatus').textContent = 'Đăng nhập thành công!';
        document.getElementById('loginStatus').style.color = 'green';

        // Điều hướng sau khi đăng nhập thành công
        setTimeout(() => {
            window.location.href = 'home.html'; // Điều hướng đến trang chính sau khi đăng nhập
        }, 1000);
    } else {
        // Nếu thông tin đăng nhập không đúng
        document.getElementById('loginStatus').textContent = 'Tên đăng nhập hoặc mật khẩu không đúng!';
        document.getElementById('loginStatus').style.color = 'red';
    }
});

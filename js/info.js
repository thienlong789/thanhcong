// Khởi tạo số dư tài khoản
let balance = 0;

// Cập nhật số dư hiển thị
function updateBalance() {
    document.getElementById('balance').innerText = balance;
}

// Hàm nạp tiền
function deposit() {
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Vui lòng nhập số tiền hợp lệ!');
        return;
    }
    balance += amount;
    updateBalance();
    document.getElementById('deposit-amount').value = ''; // Xóa input
    alert(`Đã nạp ${amount} VNĐ thành công!`);
}

// Hàm rút tiền
function withdraw() {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Vui lòng nhập số tiền hợp lệ!');
        return;
    }
    if (amount > balance) {
        alert('Số dư không đủ để thực hiện giao dịch!');
        return;
    }
    balance -= amount;
    updateBalance();
    document.getElementById('withdraw-amount').value = ''; // Xóa input
    alert(`Đã rút ${amount} VNĐ thành công!`);
}

// Cập nhật số dư ban đầu
updateBalance();

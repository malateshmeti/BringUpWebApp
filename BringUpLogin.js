document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.querySelector(".logout button");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            window.location.href = "BringUpLogin.html"; // Redirect to login page
        });
    }
});

// Authentication logic
const correctUsername = 'admin';
const correctPassword = 'admin123';

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const loginError = document.getElementById('loginError');

    if (username === correctUsername && password === correctPassword) {
        showDashboard();
    } else {
        loginError.textContent = 'Incorrect username or password.';
        loginError.style.color = 'red';
    }
});

// Show dashboard and hide login page
function showDashboard() {
    window.location.href = 'DashBoardPage.html';
}

// Navigate to different modules
function openModule(moduleName) {
    switch (moduleName) {
        case 'ElectricianMainModule':
            window.location.href = 'ElectricianMainModule.html';
            break;
        case 'InstallationMainModule':
            window.location.href = 'InstallationMainModule.html';
            break;
        case 'HomeApplianceMainModule':
            window.location.href = 'HomeApplianceMainModule.html';
            break;
        case 'PlumberMainModule':  
        case 'PainterMainModule':  
        case 'CarpenterMainModule':
        case 'LaundryMainModule':
        case 'CustomerSupportMainModule':
        case 'AboutUsMainModule':
            alert(moduleName + ' is under construction.');
            break;
        default:
            alert('Module not recognized.');
            break;
    }
}


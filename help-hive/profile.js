const defaultAvatar = "default-avatar.png";
function editProfile() {
    document.querySelector('.profile-view').classList.add('hidden');
    document.querySelector('.profile-edit').classList.remove('hidden');

    document.getElementById('editName').value = document.getElementById('displayName').innerText;
    document.getElementById('editBio').value = document.getElementById('displayBio').innerText;
}

function saveProfile() {
    document.getElementById('displayName').innerText = document.getElementById('editName').value;
    document.getElementById('displayBio').innerText = document.getElementById('editBio').value;

    document.querySelector('.profile-edit').classList.add('hidden');
    document.querySelector('.profile-view').classList.remove('hidden');
}

function cancelEdit() {
    document.querySelector('.profile-edit').classList.add('hidden');
    document.querySelector('.profile-view').classList.remove('hidden');
}

document.getElementById('uploadPhoto').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
            document.getElementById('editProfileImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

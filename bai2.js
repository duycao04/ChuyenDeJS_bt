document.addEventListener("DOMContentLoaded", function() {
    const addSubjectForm = document.getElementById("ThemMonHoc");
    const subjectNameInput = document.getElementById("TenMonHoc");
    const subjectList = document.getElementById("Danhsach");

    addSubjectForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn gửi form mặc định

        const subjectName = subjectNameInput.value.trim();
        if (subjectName === "") {
            alert("Vui lòng nhập tên môn học");
            return;
        }

        const listItem = document.createElement("li");
        listItem.textContent = subjectName;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        subjectList.appendChild(listItem);

        subjectNameInput.value = ""; // Xóa nội dung trong ô nhập
    });
});

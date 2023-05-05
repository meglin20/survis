const dropArea = document.getElementById("drop-area");
const fileList = document.getElementById("file-list");

// Add event listeners
["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
dropArea.addEventListener(eventName, preventDefaults, false);
document.body.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop area when item is dragged over it
["dragenter", "dragover"].forEach(eventName => {
dropArea.addEventListener(eventName, highlight, false);
});

// Unhighlight drop area when item is dragged out of it
["dragleave", "drop"].forEach(eventName => {
dropArea.addEventListener(eventName, unhighlight, false);
      });

// Handle dropped files
dropArea.addEventListener("drop", handleDrop, false);

function preventDefaults(event) {
  event.preventDefault();
  event.stopPropagation();
}

function highlight() {
  dropArea.classList.add("dragging");
}

function unhighlight() {
  dropArea.classList.remove("dragging");
}

function handleDrop(event) {
  const files = event.dataTransfer.files;
  validateFiles(files);
  initializeProcess(files);
}

function validateFiles(files) {
    // Add your validation logic here
  }

  function initializeProcess(files) {
    for (const file of files) {
      const listItem = document.createElement("li");
      listItem.textContent = file.name;
      fileList.appendChild(listItem);
    }
  }

// function storeValues() {
//     var formData = {
//       firstName: document.getElementById("species").value,
//       lastName: document.getElementById("lastName").value,
//       email: document.getElementById("email").value,
//       password: document.getElementById("password").value
//     };
  
//     console.log(formData);
//   }

// // function insertVal(value, id) {
// //     id.innerHTML = value;
// // }

// function getValue(checkboxId) {
//     var checkbox = document.getElementById(checkboxId);
//     var isChecked = checkbox.checked;
//     var value = isChecked ? checkbox.value : null;
//     console.log(value + "here");
//     // insertVal(value, checkboxId+"-r")
//     //insertVal(value, "state-alive1-r")
//     return value;
//   }

// const tmp = document.getElementById("state-alive1-r");
// tmp.innerHTML = getValue("state-alive1");
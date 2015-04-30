function toggleEditable(userid) {
  var editButton = document.getElementById("EditButton_" + userid);

  if(editButton.textContent == "Edit") {
    setFieldsDisabled(userid, false);
    editButton.textContent = "Cancel";
  }else{
    var firstNameField = document.getElementById("FirstName_" + userid);
    var lastNameField = document.getElementById("LastName_" + userid);
    var emailField = document.getElementById("Email_" + userid);
    var commentField = document.getElementById('Comment_' + userid);

    firstNameField.value = document.getElementById("OriginalFirstName_" + userid).value;
    lastNameField.value = document.getElementById("OriginalLastName_" + userid).value;
    emailField.value = document.getElementById("OriginalEmail_" + userid).value;
    commentField.value = document.getElementById('OriginalComment_' + userid).value;
    setFieldsDisabled(userid, true);
    editButton.textContent = "Edit";
  }
}

function setFieldsDisabled(userid, value){
  var firstNameField = document.getElementById("FirstName_" + userid);
  var lastNameField = document.getElementById("LastName_" + userid);
  var emailField = document.getElementById("Email_" + userid);
  var commentField = document.getElementById("Comment_" + userid);
  var updateButton = document.getElementById("Update_" + userid);
  var deleteButton = document.getElementById("Delete_" + userid);
  firstNameField.disabled = value;
  lastNameField.disabled = value;
  emailField.disabled = value;
  commentField.disabled = value;

  if (value == false) {
    updateButton.style.display = '';
    deleteButton.style.display = '';
  } else {
    updateButton.style.display = 'none';
    deleteButton.style.display = 'none';
  }
}

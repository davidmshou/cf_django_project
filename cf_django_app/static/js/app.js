function toggleEditable(userid){
    var EditButton = document.getElementById("EditButton_"+userid);
    if(EditButton.textContent == "Edit"){
      //User wants to edit or delete this record, so enable the fields
        setFieldsDisabled(userid, false);
    //...and set the Edit button to now be a Cancel button
        EditButton.textContent = "Cancel";
    }
    else{
        //User cancelled editing this record, so reset fields to previous values
        var FirstNameField = document.getElementById("FirstName_"+userid);
        var LastNameField = document.getElementById("LastName_"+userid);
        var EmailField = document.getElementById("Email_"+userid);
        FirstNameField.value = document.getElementById("OriginalFirstName_"+userid).value;
        LastNameField.value = document.getElementById("OriginalLastName_"+userid).value;
    //...and reset the record UI to read-only mode
        EmailField.value = document.getElementById("OriginalEmail_"+userid).value;
        setFieldsDisabled(userid, true);
        EditButton.textContent = "Edit";
    }
}
//used to bulk set a given record's fields
function setFieldsDisabled(userid, value){
    var FirstNameField = document.getElementById("FirstName_"+userid);
    var LastNameField = document.getElementById("LastName_"+userid);
    var EmailField = document.getElementById("Email_"+userid);
    var updateButton = document.getElementById("Update_"+userid);
    var deleteButton = document.getElementById("Delete_"+userid);
    FirstNameField.disabled = value;
    LastNameField.disabled = value;
    EmailField.disabled = value;
    updateButton.disabled = value;
    deleteButton.disabled = value;
}

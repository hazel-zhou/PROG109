         function validate(myForm) {
         
         var errors=[];
// Validate the required fields. 
         if( document.myForm.FirstName.value == "" ) {
            errors.push( "Please provide your first name!" );
         }
         if( document.myForm.LastName.value == "" ) {
            errors.push( "Please provide your last name!" );
         }
         // Validate the Email ID form.
         if( document.myForm.Email.value == "" ) {
            errors.push( "Please provide your Email!" );}
         var emailID = document.myForm.Email.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            errors.push("Please enter correct email ID")
            document.myForm.Email.focus() ;}
         if( document.myForm.Phone.value == "" ) {
            errors.push( "Please provide your phone number!" );
         }
         var username = document.myForm.UserName.value;
         if( username == "" || username.length > 12 ) {
            errors.push( "Please provide your username and cannot be greater than 12 characters!" );
         }
         var password = document.myForm.Password.value;
         if( password == "" || password.length > 7 ) {
            errors.push( "Please provide your password and cannot be greater than 7 characters!" );
         }
         if( document.myForm.Address.value == "" ) {
            errors.push( "Please provide your address!" );
         }
         if( document.myForm.City.value == "" ) {
            errors.push( "Please provide your city!" );
         }
         if( document.myForm.State.value == -1 ) {
            errors.push( "Please select your State!" );
         }
         if( document.myForm.Country.value == "" ) {
            errors.push( "Please select your Country!" );
         }

// Validate the form of first name.
         var firstname = document.myForm.FirstName.value;
         if (!/^[a-zA-Z]*$/g.test(document.myForm.FirstName.value) || firstname.length > 20) {
            errors.push("Invalid characters in first name and cannot be greater than 20 characters");
            document.myForm.FirstName.focus();}
// Validate the form of last name.
         var lastname = document.myForm.LastName.value;
         if (!/^[a-zA-Z]*$/g.test(document.myForm.LastName.value) || lastname.length > 50) {
            errors.push("Invalid characters in last name and cannot be greater than 50 characters");
            document.myForm.FirstName.focus();}
// Validate the form of Phone
         var phone = document.myForm.Phone.value;
         if (isNaN(phone) || phone.length > 15) {
         errors.push ("Invalid characters in phone and cannot be greater than 15 characters");
         }
// Validat the Zip Code
         var country = document.myForm.Country.value;
         if (country == "USA")
         var zip = document.myForm.Zip.value;
         if( zip == "" ) {
            errors.push( "Please provide your Zip Code!" );
         }
         if (errors.length > 0) {
           var msg = "ERRORS:\n\n";
           for (var i=0; i<errors.length; i++) {
                msg+=errors[i] + "\n";
           }
         document.getElementById("errorMessages").innerHTML = msg;
         return false;
      }
         return (true);
      }










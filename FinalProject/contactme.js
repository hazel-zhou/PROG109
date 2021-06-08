         function validate(myContact) {
         
         var errors=[];
      
         if( document.myContact.Name.value == "" ) {
            errors.push( "Please provide your name!" );
         }
         if( document.myContact.Email.value == "" ) {
            errors.push( "Please provide your Email!" );
         }
         if( document.myContact.Comment.value == "" ) {
            errors.push( "Please provide your comment!" );
         }
         if (errors.length > 0) {
           var msg = "ERRORS:\n\n";
           for (var i=0; i<errors.length; i++) {
                msg+=errors[i] + "\n";
           }
         alert(msg);
         return false;
      }
         return( true );
      }
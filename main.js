  $(document).ready(function(){


    function register(){
        $("#regform").submit(function(event){
            event.preventDefault();
            var forename = $("#FirstName").val();
            var surname = $("#LastName").val();
            
            var useremail = $("#InputEmail").val();
            var password = $("#InputPassword").val();
            console.log(useremail);
            // var valid = false;
                $.ajax({
                  url: "http://127.0.0.1:5000/user/register",
                  dataType: 'json',
                  type: "POST",
                  // async: false,
                  data: {
                    fname: forename,
                    lname: surname,
                    password: password,
                    email: useremail,
                  },
                  success: function (result) {
                    console.log(result);
                   var rv = result.error;
                    if(rv){
                        $("#register-danger").css("display", "block");
                       }else{
                        $("#register-sucess").css("display", "block");
                       }
                      
                  },
                  
                });
                return false;
              });

    }

    function login(){
        $("#formlogin").submit(function(event){
            event.preventDefault();
             var loginemail = $("#loginEmail").val();       
             var loginpass = $("#loginPassword").val();
           
                 $.ajax({
                   url: "http://127.0.0.1:5000/user/login",
                  //  dataType: 'json',
                   type: "POST",
                   data: {
                    email: loginemail,
                    password: loginpass,
                   },
                   success: function (result) {
                     if(result.error){
                        $("#register-danger").css("display", "block");
                     }else{
                        window.location.href = "dashboard";
                     }
                
                   },
              
                 });
            
                  
               });
              
    }

    function logout(){
        $("#logout").click(function(e){
            e.preventDefault();
                $.ajax({
                  url: "http://127.0.0.1:5000/user/logout",
                  type: "POST",
                  success: function (result) {
                    if(result.statusCode == '200'){
                     window.location.href = "login";
                    }
               
                  },
                  
                });
         });
    }
   






// call functions
    register();
    login()
    logout();

   });


  
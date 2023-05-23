function Login(){/*
    $.ajax({
        type: "POST",
        url: "//151.177.184.22/ipp.php",
        data: {
            'task':'login',
            'username':$("#user").val(),
            'password':$("#pass").val()
        },
        success: function(msg){
            if(msg=="success"){
                window.location.href="./main.html";
            }
            else if("fail")
                alert("Wrong username or password!");
            else
                alert("Something went wrong...");
        }
    });*/
    window.location.href="./main.html";
}
function buy(){
    window.location.href="./buy.html";
}
function sell(){
    window.location.href="./sell.html";

}
function Register(){
	$.ajax({
        type: "POST",
        url: "//151.177.184.22/ipp.php",
        data: {
            'task':'register',
        	'email' : $("#email").val(),
            'username':$("#user").val(),
            'password':$("#pass").val()
        },
        success: function(msg){
            window.location.href="./index.html";
        }
    });
}
function Search(){
    $.ajax({
        type: "POST",
        url: "//151.177.184.22/ipp.php",
        data: {
        	'task':'search',
            'query':$("#query").val(),
        },
        success: function(msg){
            $("#found").html(msg);
        }
    });
}
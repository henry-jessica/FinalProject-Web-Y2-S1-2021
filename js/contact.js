function handleSuccess(e) {
 e.preventDefault();
 Swal.fire({
  icon: "success",
  title: "Success",
  text: "Message sent successfully, we will contact you soon.",
 }); 
}

$(document).ready(function(){
    $('form').on("submit",function(){
        handleSuccess(event);
     $("#contact")[0].reset();   
    });
});
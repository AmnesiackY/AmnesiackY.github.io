document.querySelector(".first").addEventListener('click', function(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
  });
  
  document.querySelector(".second").addEventListener('click', function(){
    Swal.fire("Our First Alert", "With some body text!");
  });
  
  document.querySelector(".third").addEventListener('click', function(){
    Swal.fire("Our First Alert", "With some body text and success icon!", "success");
  });
function removeFlash(){
  window.setTimeout(function() {   
      $(".alert").fadeTo(1000, 0, function(){
          
      });
  }, 4000);     
}

function deleteNote(noteId) {
  alert("Test")
    fetch("/delete-note", {
      method: "POST",
      body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
      window.location.href = "/";
    });
  }


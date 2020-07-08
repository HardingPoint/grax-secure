/* eslint-disable no-undef */
(function() {
  const $dropzone = $("#dropzone");
  const $uploadInput = $("#upload-input");

  $(".upload-btn").on("click", function() {
    $uploadInput.click();
    $(".progress-bar").text("0%");
    $(".progress-bar").width("0%");
  });

  $dropzone.on("dragover", function(e) {
    $dropzone.addClass("slds-has-drag-over");
    e.preventDefault();
    e.stopPropagation();
  });

  $dropzone.on("dragleave", function() {
    $dropzone.removeClass("slds-has-drag-over");
  });

  $dropzone.on("dragenter", function(e) {
    e.preventDefault();
    e.stopPropagation();
  });

  const uploadHandler = function(files) {
    if (files.length > 0) {
      // create a FormData object which will be sent as the data payload in the
      // AJAX request
      const formData = new FormData();

      // loop through all the selected files and add them to the formData object
      for (var i = 0; i < files.length; i++) {
        const file = files[i];
        // add the files to formData object for the data payload
        formData.append("uploads[]", file, file.name);
      }

      const updateProgressBar = function(percentComplete) {
        $(".progress-bar .slds-assistive-text").text(`${percentComplete}%`);
        $(".progress-bar").width(`${percentComplete}%`);
      };

      $.ajax({
        url:
          "/upload?token=" +
          encodeURIComponent(window.__grax__.token) +
          "&_csrf=" +
          encodeURIComponent(window.__grax__._csrf),
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success(data) {
          alert("GRAX Upload Succcessful");
          console.log("upload successful!\n " + data);

          updateProgressBar(0);
        },
        xhr() {
          // create an XMLHttpRequest
          const xhr = new XMLHttpRequest();

          // listen to the 'progress' event
          xhr.upload.addEventListener(
            "progress",
            function(evt) {
              if (evt.lengthComputable) {
                // calculate the percentage of upload completed
                let percentComplete = evt.loaded / evt.total;
                percentComplete = parseInt(percentComplete * 100);

                // update the Bootstrap progress bar with the new percentage
                updateProgressBar(percentComplete);

                // once the upload reaches 100%, set the progress bar text to done
                if (percentComplete === 100) {
                  $(".progress-bar .slds-assistive-text").html("Done");
                }
              }
            },
            false
          );

          return xhr;
        },
        error(xhr, status, error) {
          document.body.innerText = xhr.statusText + " " + xhr.responseText;
        }
      });
    }
  };

  $uploadInput.on("click", function() {
    $uploadInput.val(null);
  });

  $uploadInput.on("change", function(e) {
    if (e.target.value != null) {
      uploadHandler($(this).get(0).files);
    }
  });

  $dropzone.on("drop", function(e) {
    if (e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files.length > 0) {
      e.preventDefault();
      e.stopPropagation();

      uploadHandler(e.originalEvent.dataTransfer.files);
    }
  });
})();

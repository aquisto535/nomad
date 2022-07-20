const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const handleSubmit = (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id; // to make sure whether the comment is belong to which video.
  fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    body: {
      text,
    },
  });
};

if (form) {
  form.addEventListener("submit", handleSubmit);
} // this form only exist when user logged in. so we make a option.

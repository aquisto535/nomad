const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const addComment = (text, id) => {
  const videocComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  const span2 = document.createElement("span");
  span2.innerText = " ❌ ";
  span.innerText = ` ${text}`;
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);
  videocComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id; // to make sure whether the comment is belong to which video.
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // tell backend we send json
    },
    body: JSON.stringify({ text }), //send json string to backend
  }); // send data to backend so they create a comment object. and that object will be used in frontend

  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json(); // get the comment object.
    addComment(text, newCommentId);
  }
};
if (form) {
  form.addEventListener("submit", handleSubmit);
} // this form only exist when user logged in. so we make a option.

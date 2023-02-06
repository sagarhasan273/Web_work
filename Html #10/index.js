const submitComment = document.getElementById("submit-comment");
submitComment.addEventListener('click', function() {
    const commentText = document.getElementById("comment-text").value;
    const commentsList = document.getElementById("comments-list");
    const newComment = document.createElement("div");
    newComment.innerHTML = commentText;
    commentsList.appendChild(newComment);
});
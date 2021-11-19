const $id = (id) => {
    return document.getElementById(id);
}
const numWithCom = (num) => {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
const dateFormat = (dateStr) => {
    dateStr = new Date(dateStr);
    let seconds = Math.floor((new Date() - dateStr) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}

const updateDefault = () => {
    $id('default-pp').src = users[defaultUser];
    $id('default-pp-1').src = users[defaultUser];
    $id('default-username').innerText = defaultUser;
    $id('default-name').innerText = defaultName;
}
updateDefault();
$id("story-card").innerHTML = "";
for (let i = 0; i < stories.length; i++) {
    $id("story-card").innerHTML += `
    <div class="story-card">
        <div class="profile-pic ${stories[i].seen}">
            <img src="${users[stories[i].username]}" alt="" class="profile-img">
        </div>
        <p class="username">${stories[i].username}</p>
    </div>
    `;
}
$id("post-card").innerHTML = "";
for (let i = 0; i < posts.length; i++) {
    $id("post-card").innerHTML += `
<div class="post-card">
    <div class="user-info">
        <div class="info">
            <div class="profile-pic">
                <img src="${users[posts[i].username]}" alt="" class="profile-img">
            </div>
            <p class="username">${posts[i].username}</p>
        </div>
        <svg aria-label="More options" class="options" color="#262626" fill="#262626"
            height="24" role="img" viewBox="0 0 24 24" width="24">
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6.5" cy="12" r="1.5"></circle>
            <circle cx="17.5" cy="12" r="1.5"></circle>
        </svg>
    </div>
    <img src="${posts[i].posts_img}" alt="">
    <div class ="post-details">
    <div class ="post-reactions">
    <svg aria-label="Like" class ="like-ic-em rec-icon" color="#262626" fill="#262626"
    height="24" role="img" viewBox="0 0 48 48" width="24">
    <path
    d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
    </path>
    </svg>
    <svg aria-label="Comment" class ="comment-ic rec-icon" color="#262626" fill="#262626"
    height="24" role="img" viewBox="0 0 48 48" width="24">
    <path clip-rule="evenodd"
    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
    fill-rule="evenodd"></path>
    </svg>
    <svg aria-label="Share Post" class ="share-post-ic rec-icon" color="#262626"
    fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24">
    <path
    d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
    </path>
    </svg>
    <svg aria-label="Save" class ="sve-post-ic rec-icon" color="#262626" fill="#262626"
    height="24" role="img" viewBox="0 0 48 48" width="24">
    <path
    d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z">
    </path>
    </svg>
    </div>
    <div class ="likes-div">
    <img src="./assets/images/default-user.png" alt="">
    <p class ="likes-cnt">
    Liked by <span>user123</span> and <span>${numWithCom(posts[i].likes)} others</span>
    </p>
    </div>
    <div class ="caption-div">
    <span>${posts[i].username} </span>${posts[i].caption}
    </div>
    <div class="view-all-cmt">View all ${numWithCom(posts[i].comments)} comments</div>
    <div class ="post-time">${dateFormat(posts[i].post_time)}</div>
    <div class="comment-div">
        <svg aria-label="Emoji" class="rec-icon" color="#262626" fill="#262626" height="24"
        role="img" viewBox="0 0 48 48" width="24">
        <path
            d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z">
        </path>
        <path
            d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z">
        </path>
    </svg>
        <input type="text" class="comment-inp" placeholder="Add a comment" />
        <button class="comment-btn" disabled >Post</button>
    </div>
    </div>
</div>
`;
}
$id("suggestions").innerHTML = "";
for (let i = 0; i < suggestions.length; i++) {
    $id("suggestions").innerHTML += `
    <div class="suggest-card">
        <div class="s-userinfo">
            <div class="profile-pic">
                <img src="${users[suggestions[i].username]}" alt="" class="profile-img">
            </div>
            <div class="name-div">
                <p class="username">${suggestions[i].username}</p>
                <p class="fullname">Followed by ${suggestions[i].followed_by}</p>
            </div>
        </div>
        <div class="switch-div">
            <button class="action-btn">Follow</button>
        </div>
    </div>
`;
}

$(".post-container").html($("#post-card .post-card").sort(function () {
    return Math.random() - 0.5;
}));
$(".story-container").html($(".story-card").sort(function () {
    return Math.random() - 0.5;
}));

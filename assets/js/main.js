const updateDefault = () => {
    $id('default-pp').src = users[defaultUser].pic;
    $id('default-pp-1').src = users[defaultUser].pic;
    $id('default-username').innerText = defaultUser;
    $id('default-name').innerText = users[defaultUser].name;
}
const home_svg = `<path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>`;
const home_em_svg = `<path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>`;
const message_svg = `<path clip-rule="evenodd" d="M10.2 29.8c-.7 1 .6 2.2 1.6 1.5l7.3-5.5c.5-.4 1.2-.4 1.7 0l5.4 4c1.6 1.2 3.9.8 5-.9L38 18.2c.7-1-.6-2.2-1.6-1.5L29 22.2c-.5.4-1.2.4-1.7 0l-5.4-4c-1.6-1.2-3.9-.8-5 .9l-6.7 10.7zM24 1c13 0 23 9.5 23 22.3S37 45.6 24 45.6c-2.3 0-4.6-.3-6.7-.9-.4-.1-.8-.1-1.2.1l-4.6 2c-1.1.6-2.5-.3-2.5-1.6l-.1-4.1c0-.5-.2-1-.6-1.3C3.7 35.8 1 30 1 23.3 1 10.5 11 1 24 1z" fill-rule="evenodd"></path>`;
const message_em_svg = `<path d="M36.2 16.7L29 22.2c-.5.4-1.2.4-1.7 0l-5.4-4c-1.6-1.2-3.9-.8-5 .9l-6.8 10.7c-.7 1 .6 2.2 1.6 1.5l7.3-5.5c.5-.4 1.2-.4 1.7 0l5.4 4c1.6 1.2 3.9.8 5-.9l6.8-10.7c.6-1.1-.7-2.2-1.7-1.5zM24 1C11 1 1 10.5 1 23.3 1 30 3.7 35.8 8.2 39.8c.4.3.6.8.6 1.3l.2 4.1c0 1 .9 1.8 1.8 1.8.2 0 .5 0 .7-.2l4.6-2c.2-.1.5-.2.7-.2.2 0 .3 0 .5.1 2.1.6 4.3.9 6.7.9 13 0 23-9.5 23-22.3S37 1 24 1zm0 41.6c-2 0-4-.3-5.9-.8-.4-.1-.8-.2-1.3-.2-.7 0-1.3.1-2 .4l-3 1.3V41c0-1.3-.6-2.5-1.6-3.4C6.2 34 4 28.9 4 23.3 4 12.3 12.6 4 24 4s20 8.3 20 19.3-8.6 19.3-20 19.3z"></path>`;
const create_svg = `<path d="M43.9 4c-2.5-2.4-5.5-4-12.2-4H16.2C9.6 0 6.6 1.6 4 4.1 1.6 6.6 0 9.6 0 16.2v15.5c0 6.6 1.6 9.7 4.1 12.2 2.5 2.4 5.5 4 12.2 4h15.5c6.6 0 9.7-1.6 12.2-4.1 2.4-2.5 4-5.5 4-12.2V16.2c0-6.6-1.6-9.6-4.1-12.2zm-7.6 21.5H25.5v10.8c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h10.8V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v10.8h10.8c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path>`;
const create_em_svg = `<path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z"></path><path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path><path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z"></path>`;
const like_svg = `<path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>`;
const like_em_svg = `<path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>`;
const options_svg = `<circle cx="12" cy="12" r="1.5"></circle><circle cx="6.5" cy="12" r="1.5"></circle><circle cx="17.5" cy="12" r="1.5"></circle>`;
const comment_svg = `<path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path>`;
const share_svg = `<path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
</path>`;
const save_svg = `<path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path>`;
const save_em_svg = `<path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>`;
const reels_svg = ``;
const reels_em_svg = `<path d="M31.5 28.2l-11.2-6.5c-.5-.3-1-.3-1.5 0-.5.2-.8.7-.8 1.3v13c0 .5.3 1 .8 1.3.2.1.5.2.7.2.3 0 .5-.1.8-.2l11.2-6.5c.5-.3.7-.8.7-1.3s-.3-1-.7-1.3zM43.9 4c-2.5-2.4-5.5-4-12.2-4H16.2C9.6 0 6.6 1.6 4 4.1 1.6 6.6 0 9.6 0 16.2v15.5c0 6.6 1.6 9.7 4.1 12.2 2.5 2.4 5.5 4 12.2 4h15.5c6.6 0 9.7-1.6 12.2-4.1 2.4-2.5 4-5.5 4-12.2V16.2c0-6.6-1.6-9.6-4.1-12.2zM31.8 3c6.3 0 8.4 1.6 10 3.2 1.2 1.2 2.3 2.7 2.9 5.8h-9.3l-5.1-9h1.5zM16.2 3h10.5l5.1 9h-12l-5.1-9h1.5zm-10 3.2C7.3 5.1 8.7 4 11.5 3.4l4.9 8.6H3.3C3.9 8.9 5 7.4 6.2 6.2zM45 31.8c0 6.3-1.6 8.4-3.2 10-1.6 1.6-3.8 3.2-10 3.2H16.2c-6.3 0-8.4-1.6-10-3.2C4.6 40.2 3 38 3 31.8V15h42v16.8z"></path>`;
const emoji_svg = `<path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z">
</path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z">
</path>`;
updateDefault();
$id("story-card").innerHTML = "";
for (let i = 0; i < stories.length; i++) {
    $id("story-card").innerHTML += `
    <div class="story-card">
        <div class="profile-pic ${stories[i].seen}">
            <img src="${users[stories[i].username].pic}" alt="" class="profile-img" oncontextmenu="return false;">
        </div>
        <p class="username">${stories[i].username}</p>
    </div>
    `;
}
$id("post-card").innerHTML = "";
for (let i = 0; i < allPosts.length; i++) {
    let postId = allPosts[i];
    let post = posts[postId];
    let username = post.username;
    $id("post-card").innerHTML += `
<div class="post-card">
    <div class="user-info">
        <div class="info">
            <div class="profile-pic">
                <img src="${users[username].pic}" alt="" class="profile-img" oncontextmenu="return false;">
            </div>
            <a href="./profile/?u=${username}"><p class="username">${username}</p></a>
        </div>
        <svg aria-label="More options" class="options" color="#262626" fill="#262626"
            height="24" role="img" viewBox="0 0 24 24" width="24">
            ${options_svg}
        </svg>
    </div>
    <div class="like-animation" id="${postId}-ani"></div>
    <div class="post-img-block">
    <img src="${post.posts_img}" alt="" oncontextmenu="return false;" id="${postId}-img" ondblclick="Like(this.id)">
    </div>
    <div class ="post-details">
    <div class ="post-reactions">
    <svg aria-label="Like" class ="like-ic-em rec-icon" color="#ed4956" fill="#262626" id="${postId}-like"
    height="24" role="img" viewBox="0 0 48 48" width="24" onclick="toggleLike(this.id)" >${like_em_svg}</svg>
    <svg aria-label="Comment" class ="comment-ic rec-icon" color="#262626" fill="#262626"
    height="24" role="img" viewBox="0 0 48 48" width="24">${comment_svg}</svg>
    <svg aria-label="Share Post" class ="share-post-ic rec-icon" color="#262626"
    fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24">${share_svg}</svg>
    <svg aria-label="Save" class ="sve-post-ic rec-icon" color="#262626" fill="#262626" id="${postId}-sve"
    height="24" role="img" viewBox="0 0 48 48" width="24" onclick="toggleSave(this.id)">${save_em_svg}</svg>
    </div>
    <div class ="likes-div">
    <img src="${users[post.liked_by].pic}" alt="" oncontextmenu="return false;">
    <p class ="likes-cnt" id="${postId}-lcnt">
    Liked by <span><a href="./profile/?u=${post.liked_by}">${post.liked_by}</a></span> and <span>${numWithCom(post.likes)} others</span>
    </p>
    </div>
    <div class ="caption-div">
    <span><a href="./profile/?u=${username}">${username}</a> </span>${post.caption}
    </div>
    <div class="view-all-cmt">View all ${numWithCom(post.comments)} comments</div>
    <div class ="post-time">${dateFormat(post.post_time)}</div>
    <div class="comment-div">
        <svg aria-label="Emoji" class="rec-icon" color="#262626" fill="#262626" height="24"
        role="img" viewBox="0 0 48 48" width="24">${emoji_svg}</svg>
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
            <a href="./profile/?u=${suggestions[i].username}">
                <img src="${users[suggestions[i].username].pic}" alt="" class="profile-img">
            </a>
            </div>
            <div class="name-div">
                <a href="./profile/?u=${suggestions[i].username}">
                    <p class="username">${suggestions[i].username}</p>
                </a>
                <p class="fullname">Followed by ${suggestions[i].followed_by}</p>
            </div>
        </div>
        <div class="switch-div">
            <button class="action-btn">Follow</button>
        </div>
    </div>
`;
}

const toggleLike = (id) => {
    let att = $(`#${id}`).attr("aria-label");
    if (att == "Unlike") {
        $id(id).innerHTML = like_em_svg;
        $(`#${id}`).attr("aria-label", "Like");
        $(`#${id}`).attr("fill", "#262626");
        id = id.replaceAll('-like', '-lcnt');
        let lktxt = $id(id).innerHTML;
        lktxt = lktxt.replaceAll('Liked by <span>You</span> , ', 'Liked by ');
        $id(id).innerHTML = lktxt;
        id = id.replaceAll('-lcnt', '-ani');
        $id(id).style = "";
    } else {
        $id(id).innerHTML = like_svg;
        $(`#${id}`).attr("aria-label", "Unlike");
        $(`#${id}`).attr("fill", "#ed4956");
        id = id.replaceAll('-like', '-lcnt');
        let lktxt = $id(id).innerHTML;
        lktxt = lktxt.replaceAll('Liked by ', 'Liked by <span>You</span> , ');
        $id(id).innerHTML = lktxt;
        id = id.replaceAll('-lcnt', '-ani');
        $id(id).style = "animation: like-animation 1000ms ease-in-out;";
    }
}
const toggleSave = (id) => {
    let att = $(`#${id}`).attr("aria-label");
    if (att == "Save") {
        $id(id).innerHTML = save_svg;
        $(`#${id}`).attr("aria-label", "Remove");
    } else {
        $id(id).innerHTML = save_em_svg;
        $(`#${id}`).attr("aria-label", "Save");
    }
}
const Like = async (id) => {
    id = id.replaceAll('-img', '-ani');
    $id(id).style = "animation: like-animation 1000ms ease-in-out;";
    id = id.replaceAll('-ani', '-like');
    let att = $(`#${id}`).attr("aria-label");
    if (att == "Like") {
        $id(id).innerHTML = like_svg;
        $(`#${id}`).attr("fill", "#ed4956");
        $(`#${id}`).attr("aria-label", "Unlike");
        id = id.replaceAll('-like', '-lcnt');
        let lktxt = $id(id).innerHTML;
        lktxt = lktxt.replaceAll('Liked by ', 'Liked by <span>You</span> , ');
        $id(id).innerHTML = lktxt;
    }
    await new Promise(r => setTimeout(r, 1000));
    id = id.replaceAll('-like', '-ani');
    id = id.replaceAll('-lcnt', '-ani');
    $id(id).style = "";
}
$(".post-container").html($("#post-card .post-card").sort(function () {
    return Math.random() - 0.5;
}));
$(".story-container").html($(".story-card").sort(function () {
    return Math.random() - 0.5;
}));

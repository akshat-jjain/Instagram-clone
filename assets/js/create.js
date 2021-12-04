$id("private-check").addEventListener("click", function () { $id("private").click(); });
$id("seen-check").addEventListener("click", function () { $id("seen").click(); });

console.log(allUsers);
const tabSwitcher = (evt, tab) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-box");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    $id(tab).style.display = "block";
    evt.currentTarget.className += " active";
};
$id("default").click();
$id("liked-by-data").innerHTML = ``;
for (let i = 0; i < allUsers.length; i++) {
    $id("liked-by-data").innerHTML += `<option value="${allUsers[i]}">${allUsers[i]}</option>`;
}
const loadUser = () => {
    let form_fields = $id("user-form").elements;
    let error = false;
    $id("user-errors").innerHTML = '';
    for (let i = 0; i < form_fields.length; i++) {
        if (form_fields[i].value == "") {
            $id("user-errors").innerHTML += `<li>${form_fields[i].name} is required.</li>`;
            error = true;
        }
    }
    if (error) { return false; }
    let username = $id("username").value;
    if (allUsers.find(user => user == username)) {
        $id("user-errors").innerHTML = `<li>${username} username is already used.</li>`;
        return false
    }
    let r = `"`;
    let e = `'`;
    let bio = $id("bio").value.replaceAll('\n', '<br>').replaceAll(r, e);
    $id("ucb").value = `${username}: {
        id: ${(allUsers.length) + 1},
        pic: "${$id("pic").value}",
        name: "${$id("name").value}",
        posts: ${$id("posts").value},
        followers: ${$id("followers").value},
        following: ${$id("following").value},
        bio: "${bio}",
        private: ${$id("private").checked},
    },`;
    $id("t1").click();
}
const loadStory = () => {
    let form_fields = $id("story-form").elements;
    let error = false;
    $id("story-errors").innerHTML = '';
    for (let i = 0; i < form_fields.length; i++) {
        if (form_fields[i].value == "") {
            $id("story-errors").innerHTML += `<li>${form_fields[i].name} is required.</li>`;
            error = true;
        }
    }
    if (error) { return false; }
    let seen = ($id("seen").checked) ? "seen" : "unseen";
    let username = $id("st-username").value;
    $id("scb").value = `{
    id: AVSD6SI${(allUsers.length) + 1},
    username: "${username}",
    seen: "${seen}",
    link: "#",
},`;
    $id("t2").click();
}
const loadPost = () => {
    let form_fields = $id("post-form").elements;
    let error = false;
    $id("post-errors").innerHTML = '';
    for (let i = 0; i < form_fields.length; i++) {
        if (form_fields[i].value == "") {
            $id("post-errors").innerHTML += `<li>${form_fields[i].name} is required.</li>`;
            error = true;
        }
    }
    if (error) { return false; }
    let username = $id("pt-username").value;
    let r = `"`;
    let e = `'`;
    let caption = $id("caption").value.replaceAll('\n', '<br>').replaceAll(r, e);
    $id("pcb").value = `AA${allUsers.length+1}xVFYerX: {
        username: "${username}",
        posts_img: "${$id("post-pic").value}",
        caption: "${caption}",
        likes: ${$id("likes").value},
        liked_by: "${$id("liked-by").value}",
        comments: ${$id("comments").value},
        post_time: "${new Date()}",
        link: "#"
    },`;
    $id("t3").click();
}
const copytext = (id) => {
    const el = $id(id);
    el.select();
    document.execCommand('copy');
}
$("textarea").each(function () {
    this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
}).on("input", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
});

$("textarea").each(function () {
    this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
}).on("click", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
});
const skip = (s) => {
    s = s.replaceAll("skip", "t");
    $id(s).click();
}

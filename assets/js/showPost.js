const getPost = getParameter("p");
$id("user-profile-pic").innerHTML = `
<img src="${users[username].pic}" alt="${username}" class="profile-img">
`;
$id('username').innerHTML = username;
$id('rp2').innerHTML = `<p><span>${numWithMil(users[username].posts)}</span> posts</p>
<p><span>${numWithMil(users[username].followers)}</span> followers</p>
<p><span>${numWithMil(users[username].following)}</span> following</p>`;
$id('rp3').innerHTML = `${users[username].name}<br>${users[username].bio}`;

document.title = `${posts[getPost].username}(@${}) • Instagram photos and videos`;

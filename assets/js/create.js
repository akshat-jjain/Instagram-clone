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

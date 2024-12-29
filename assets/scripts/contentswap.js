function swapContent(page) {
    const contentDiv = document.getElementById("content");
    const xhr = new XMLHttpRequest();
    console.log(`Current working directory: ${window.location.pathname}`);
    console.log(`Current working parent directory: ${window.location.pathname.split("/").slice(0, -1).join("/")}`);
    xhr.open("GET", `/pages/txtswap/${page}.txt`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contentDiv.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

swapContent("home");
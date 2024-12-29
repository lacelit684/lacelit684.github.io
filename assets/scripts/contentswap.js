function swapContent(page) {
    const contentDiv = document.getElementById("content");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `/pages/txtswap/${page}.txt`);
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState, xhr.status);
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            contentDiv.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

function test(sigma) {
    console.log("Test", sigma);
}

// swapContent("home");
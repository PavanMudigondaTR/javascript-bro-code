// Window object - represents browser window

function showWindowInfo() {
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Window Information:</h3>
        <p>Width: ${window.innerWidth}px</p>
        <p>Height: ${window.innerHeight}px</p>
        <p>Location: ${window.location.href}</p>
        <p>User Agent: ${window.navigator.userAgent}</p>
    `;
}

function openNewWindow() {
    window.open('https://www.example.com', '_blank', 'width=600,height=400');
}

function resizeWindow() {
    window.resizeTo(800, 600);
}

// Window events
window.onload = function() {
    console.log('Page loaded!');
}

window.onresize = function() {
    console.log(`Window resized to ${window.innerWidth}x${window.innerHeight}`);
}

// ===================================
// DOM Manipulation Examples
// ===================================

// 1. Selecting Elements
function selectElements() {
    const byId = document.getElementById('demo1');
    const byClass = document.getElementsByClassName('demo-class');
    const byQuery = document.querySelector('.demo-class');
    const byQueryAll = document.querySelectorAll('.demo-class');
    
    const output = document.getElementById('output1');
    output.innerHTML = `
        <p>getElementById: ${byId.textContent}</p>
        <p>getElementsByClassName count: ${byClass.length}</p>
        <p>querySelector: ${byQuery.textContent}</p>
        <p>querySelectorAll count: ${byQueryAll.length}</p>
    `;
}

// 2. Changing Text Content
function changeText() {
    document.getElementById('demo2').textContent = 'Text changed with JavaScript!';
}

function resetText() {
    document.getElementById('demo2').textContent = 'Original text';
}

// 3. Changing HTML Content
function changeHTML() {
    document.getElementById('demo3').innerHTML = '<strong>Bold text</strong> and <em>italic text</em>';
}

// 4. Changing Styles
function changeColor() {
    const element = document.getElementById('demo4');
    element.style.backgroundColor = '#e74c3c';
}

function changeSize() {
    const element = document.getElementById('demo4');
    element.style.fontSize = '24px';
    element.style.padding = '30px';
}

function resetStyles() {
    const element = document.getElementById('demo4');
    element.style.backgroundColor = '#3498db';
    element.style.fontSize = '';
    element.style.padding = '20px';
}

// 5. Adding/Removing Classes
function toggleHighlight() {
    document.getElementById('demo5').classList.toggle('highlight');
}

function toggleActive() {
    document.getElementById('demo5').classList.toggle('active');
}

// 6. Getting/Setting Values
function getValue() {
    const value = document.getElementById('userInput').value;
    document.getElementById('output6').textContent = `You typed: "${value}"`;
}

function setValue() {
    document.getElementById('userInput').value = 'JavaScript is awesome!';
}

// 7. Creating Elements
let counter = 1;
function addElement() {
    const container = document.getElementById('container7');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `New paragraph #${counter++}`;
    newParagraph.style.backgroundColor = '#ecf0f1';
    newParagraph.style.padding = '10px';
    newParagraph.style.margin = '5px 0';
    newParagraph.style.borderRadius = '3px';
    container.appendChild(newParagraph);
}

function clearElements() {
    document.getElementById('container7').innerHTML = '';
    counter = 1;
}

// 8. Event Listeners
const output8 = document.getElementById('output8');

document.getElementById('clickBtn').addEventListener('click', function() {
    output8.innerHTML = '<p>Button was clicked!</p>';
});

document.getElementById('hoverBtn').addEventListener('mouseover', function() {
    output8.innerHTML = '<p>Mouse is hovering!</p>';
});

document.getElementById('hoverBtn').addEventListener('mouseout', function() {
    output8.innerHTML = '<p>Mouse left!</p>';
});

document.getElementById('typeInput').addEventListener('input', function(e) {
    output8.innerHTML = `<p>You're typing: ${e.target.value}</p>`;
});

// 9. Show/Hide Elements
function toggleVisibility() {
    document.getElementById('demo9').classList.toggle('hidden');
}

// 10. Form Handling
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    
    document.getElementById('output10').innerHTML = `
        <p><strong>Form submitted!</strong></p>
        <p>Name: ${name}</p>
        <p>Age: ${age || 'Not provided'}</p>
    `;
});

// 11. DOM Traversal
function traverseDOM() {
    const middle = document.getElementById('middleChild');
    const parent = middle.parentElement;
    const prev = middle.previousElementSibling;
    const next = middle.nextElementSibling;
    const children = parent.children;
    
    document.getElementById('output11').innerHTML = `
        <p>Parent element: ${parent.tagName}</p>
        <p>Previous sibling: ${prev.textContent}</p>
        <p>Next sibling: ${next.textContent}</p>
        <p>Total children of parent: ${children.length}</p>
    `;
}

// 12. Multiple Elements
function highlightItems() {
    const items = document.querySelectorAll('#itemList li');
    items.forEach(function(item) {
        item.style.backgroundColor = '#f39c12';
        item.style.padding = '5px';
        item.style.margin = '3px 0';
    });
}

function changeAllItems() {
    const items = document.querySelectorAll('#itemList li');
    items.forEach(function(item, index) {
        item.textContent = `Modified Item ${index + 1}`;
    });
}

console.log('DOM Examples loaded! Open DevTools to see console messages.');

let text = "Ghost Text";
let h2 = document.getElementById("ghostText");

// não pode ter espaços text.split('')
text.split('').forEach((char, index) =>{
    let span = document.createElement("span");
    span.textContent = char === ' ' ? '\u00a0\u00a0' : char;
    span.style.transitionDelay = `${(index % 10) * 0.1}s`;
    h2.appendChild(span);
});
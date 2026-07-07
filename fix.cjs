const fs = require('fs');
let lines = fs.readFileSync('src/index.css', 'utf8').split('\n');
lines = lines.slice(0, 911);
const css = `
.new-env-header {
  position: absolute;
  top: 40px;
  width: 100%;
  text-align: center;
  z-index: 5;
  transition: opacity 0.5s ease;
  pointer-events: none;
}
.new-env-header--fade {
  opacity: 0;
}
.new-env-bismillah {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
.new-env-names {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.2rem;
  color: #ffffff;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
.new-env-seal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background: #ffffff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.new-env-seal span {
  font-family: 'Cinzel', serif;
  font-size: 0.65rem;
  color: #d82b3a;
  letter-spacing: 0.15em;
  text-align: center;
  line-height: 1.4;
  font-weight: 600;
}
.new-env-seal--hidden {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5);
}
`;
fs.writeFileSync('src/index.css', lines.join('\n') + css);

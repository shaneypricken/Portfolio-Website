const projects = [
  {
    title: "Chordify",
    link: "https://github.com/shaneypricken/Chordify",
    problem: "Interactive system for learning guitar chords using a virtual fretboard.",
    stack: "Processing (Java)",
    reflection: "Solved spatial mapping of chord positions using structured coordinate logic."
  },
  {
    title: "Cyber Security Safety Website",
    link: "https://github.com/shaneypricken/Cyber-Security-Website",
    problem: "Educational site teaching cybersecurity concepts and online safety.",
    stack: "HTML, CSS, JavaScript",
    reflection: "Improved UX by refining layout hierarchy and simplifying navigation."
  },
  {
    title: "AI Chord Detector",
    link: "https://github.com/shaneypricken/AIChordDetector",
    problem: "Real-time chord detection using microphone input and machine learning.",
    stack: "JavaScript, Audio Processing, ML Model",
    reflection: "Handled noisy audio input by preprocessing frequency signals for accuracy."
  },
  {
    title: "NASA Asteroid Data App",
    link: "https://github.com/chriscoleman1508/nasaadc",
    problem: "Visualization tool for analyzing NASA asteroid data.",
    stack: "Java, Data Structures, API Integration",
    reflection: "Improved performance by optimizing data parsing and modular design."
  }
];

const container = document.getElementById("projectContainer");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <a href="${p.link}" target="_blank">
      <h3>${p.title}</h3>
    </a>
    <p><b>Problem:</b> ${p.problem}</p>
    <p><b>Tech:</b> ${p.stack}</p>
    <p><b>Reflection:</b> ${p.reflection}</p>
  `;

  container.appendChild(card);
});
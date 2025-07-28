document.addEventListener('DOMContentLoaded', () => {
    const facultyGrid = document.querySelector(".faculty-grid");

    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        data.faculty.forEach(facultyMember => {
          const facultyCard = document.createElement("div");
          facultyCard.classList.add("faculty-card");
          facultyCard.innerHTML = `
            <img src="${facultyMember.image}" alt="${facultyMember.name}">
            <h3>${facultyMember.name}</h3>
            <p>${facultyMember.title}</p>
          `;
          facultyGrid.appendChild(facultyCard);
        });
      });
});
console.log(`hello`);
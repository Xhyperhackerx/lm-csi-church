const committees = [
  {
    id: "churchLeaders",
    prefix: "church-leader",
    people: [
      ["Leader Name 1", "Vicar / President"],
      ["Leader Name 2", "Vice President"],
      ["Leader Name 3", "Secretary"],
      ["Leader Name 4", "Joint Secretary"],
      ["Leader Name 5", "Treasurer"],
      ["Leader Name 6", "Committee Member"],
      ["Leader Name 7", "Committee Member"],
      ["Leader Name 8", "Committee Member"],
      ["Leader Name 9", "Committee Member"],
      ["Leader Name 10", "Committee Member"],
    ],
  },
  {
    id: "churchCommittee",
    prefix: "church-committee",
    people: Array.from({ length: 10 }, (_, i) => [
      `Member Name ${i + 1}`,
      "Church Committee Member",
    ]),
  },
  {
    id: "buildingCommittee",
    prefix: "building-committee",
    people: Array.from({ length: 10 }, (_, i) => [
      `Member Name ${i + 1}`,
      "Building Committee Member",
    ]),
  },
  {
    id: "financeCommittee",
    prefix: "finance-committee",
    people: Array.from({ length: 10 }, (_, i) => [
      `Member Name ${i + 1}`,
      "Project & Finance Committee",
    ]),
  },
  {
    id: "prayerCell",
    prefix: "prayer-cell",
    people: Array.from({ length: 10 }, (_, i) => [
      `Member Name ${i + 1}`,
      "Prayer Cell Member",
    ]),
  },
];

// Generate photo, name and post for every person
committees.forEach((committee) => {
  const grid = document.getElementById(committee.id);

  if (!grid) return;

  committee.people.forEach(([name, post], index) => {
    const number = index + 1;

    const card = document.createElement("article");
    card.className = "person-card";

    const photo = document.createElement("img");
    photo.className = "person-photo";
    photo.src = `assets/${committee.prefix}-${number}.jpg`;
    photo.alt = `${name} - ${post}`;
    photo.loading = "lazy";

    const heading = document.createElement("h3");
    heading.textContent = name;

    const position = document.createElement("p");
    position.className = "person-post";
    position.textContent = post;

    card.append(photo, heading, position);
    grid.appendChild(card);
  });
});

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}

// Footer year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

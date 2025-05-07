document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal website to showcase projects and skills.",
    },
    {
      title: "Task Manager",
      description: "A to-do app built using Django and JavaScript.",
    },
  ];

  const projectContainer = document.getElementById("projects-container");

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("my-col", "my-card");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    projectDiv.appendChild(title);
    projectDiv.appendChild(desc);

    projectContainer.appendChild(projectDiv);
  });
});

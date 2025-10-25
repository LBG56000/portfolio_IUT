function naviagetToProject(page) {
    document.location.href = page
}

document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project')
  projects.forEach((project) => {
    project.addEventListener("click", () => {
        document.location.href = project.getAttribute("link")
    })
  })
})

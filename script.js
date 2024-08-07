function toggleMode() {
  document.documentElement.classList.toggle("light")
}

async function fetchRepos() {
  const username = "SergioGTF"
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  const repos = await response.json()
  const reposContainer = document.getElementById("repos-container")

  repos.forEach((repo) => {
    const repoElement = document.createElement("div")
    repoElement.classList.add("repo-card")
    repoElement.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`
    reposContainer.appendChild(repoElement)
  })
}

document.addEventListener("DOMContentLoaded", fetchRepos)

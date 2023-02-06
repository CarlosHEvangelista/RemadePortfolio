Projects = document.querySelectorAll('.Project1, .Project2')

const infosForContact = {
  github: 'CarlosHEvangelista',
  linkedin: 'carlos-henrique-evangelista-8789ab252',
  twitter: 'CARLOSH79704596',
  email: 'carlos-henrique-evangelista@gmail.com'
}

linkedin = infosForContact.linkedin
twitter = infosForContact.twitter

linkedinString = linkedin.search(/[0-9]/) - 1
twitterString = twitter.search(/[0-9]/)

if (linkedinString > 0) {
  linkedin = linkedin.substring(0, linkedinString)
}

if (twitterString > 0) {
  twitter = twitter.substring(0, twitterString)
}

APIurl = `https://api.github.com/users/${infosForContact.github}`

fetch(APIurl)
  .then(response => response.json())
  .then(data => {
    if (data.company == null) {
      CompanyInfo.style.display = 'none'
    }

    if (data.blog == '') {
      BlogInfo.style.display = 'none'
    }

    for (Project of Projects) {
      h3 = Project.children[0].innerText
      Project.href = `${data.html_url}/${h3}`
    }

    Profile.children[0].src = data.avatar_url
    Profile.children[1].innerText = data.name
    Profile.children[2].innerText = data.bio

    LocationInfo.href = `https://www.google.com.br/maps/place/${data.location}`
    LocationInfo.children[1].innerText = data.location

    CompanyInfo.href = `https://www.google.com/search?q=${data.company}
    `
    CompanyInfo.children[1].innerText = data.company

    GithubInfo.href = data.html_url
    GithubInfo.children[1].innerText = data.login

    LinkedinInfo.href = `https://linkedin.com/in/${infosForContact.linkedin}`
    LinkedinInfo.children[1].innerText = linkedin

    TwitterInfo.href = `https://twitter.com/${infosForContact.twitter}`
    TwitterInfo.children[1].innerText = twitter

    BlogInfo.href = data.blog
    BlogInfo.children[1].innerText = data.blog

    EmailInfo.children[1].innerText = infosForContact.email

    ProjectsTitle.children[2].href = `${data.html_url}?tab=repositories`

    Post.children[0].src = data.avatar_url
  })

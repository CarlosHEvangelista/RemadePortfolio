const RepositorieLinks = document.querySelectorAll('.RepositorieLink')

const socialMediasForContact = {
  github: 'CarlosHEvangelista',
  linkedin: 'carlos-henrique-evangelista-8789ab252',
  twitter: 'CARLOSH79704596',
  email: 'carlosherqueevangelista@gmail.com'
}

Linkedin = socialMediasForContact.linkedin

String1 = Linkedin.search(/[0-9]/)

if (!(String1 == -1)) {
  Linkedin = Linkedin.substring(0, String1 - 1)
}

twitterLenght = socialMediasForContact.twitter.length
twitter = socialMediasForContact.twitter

for (var Number = 0; Number < twitterLenght; Number++) {
  twitter = twitter.replace(/[0-9]/, '')
}

function getInfosFromGithubAPI() {
  const url = `https://api.github.com/users/${socialMediasForContact.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      Profile.children[0].src = data.avatar_url
      Profile.children[1].innerText = data.name
      Profile.children[2].innerText = data.bio

      LocationInfo.children[1].innerText = data.location
      LocationInfo.href = `https://www.google.com.br/maps/place/${data.location}`

      if (data.company == null) {
        CompanyInfo.style.display = 'none'
      }
      CompanyInfo.children[1].innerText = data.company
      CompanyInfo.href = `https://www.google.com/search?q=${data.company}`

      GithubInfo.children[1].innerText = data.login
      GithubInfo.href = `https://github.com/${data.login}`

      LinkedinInfo.children[1].innerText = Linkedin
      LinkedinInfo.href = `https://www.linkedin.com/in/${socialMediasForContact.linkedin}`

      TwitterInfo.children[1].innerText = twitter
      TwitterInfo.href = `https://twitter.com/${socialMediasForContact.twitter}`

      if (data.blog == '') {
        WebsiteInfo.style.display = 'none'
      }
      WebsiteInfo.children[1].innerText = data.blog
      WebsiteInfo.href = data.blog

      EmailInfo.children[1].innerText = socialMediasForContact.email

      RepositoriesLink.href = `https://github.com/${data.login}?tab=repositories`

      Post.children[0].src = data.avatar_url

      for (RepositorieLink of RepositorieLinks) {
        DivProject = RepositorieLink.children[0]
        ProjectName = DivProject.children[0].innerText

        RepositorieLink.href = `https://github.com/${data.login}/${ProjectName}`
      }
    })
}

getInfosFromGithubAPI()

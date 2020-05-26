document.addEventListener('DOMContentLoaded', () => {

  let intro = document.getElementById('intro')
  let github = document.getElementById('github')
  let linkedin = document.getElementById('linkedin')

  let introString = 'Cloud Engineer / Software Developer'
  let githubLink = '<a href="https://www.github.com/aldarisbm" target="_blank">GitHub</a>'
  let linkedinLink = '<a href="https://www.linkedin.com/in/aldarisbm/" target="_blank">LinkedIn</a>' 

  let introLength = introString.length
  let i = 0
  let isTicking = true
  let intervalId = setInterval(printIntro, 150)

  function printIntro(){
    switch (introLength) {
      case i < introLength:
        intro.innerHTML = intro.innerHTML + introString.charAt(i)
        i++
      case i == introLength:
        setTimeout(() => {
          github.innerHTML = githubLink
        }, 1000)
        setTimeout(() => {
          linkedin.innerHTML = linkedinLink
        }, 1750)
        clearInterval(intervalId)
        setInterval(printIntro, 500)
        if (isTicking) {
          intro.innerHTML = introString + '_'
          isTicking = false
        } else {
          intro.innerHTML = introString + '&nbsp;&nbsp;'
          isTicking = true
        }
    }
  }
})

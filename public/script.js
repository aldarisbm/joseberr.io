document.addEventListener('DOMContentLoaded', () => {

  let intro = document.getElementById('intro')
  let github = document.getElementById('github')
  let linkedin = document.getElementById('linkedin')

  let introString = 'Software Developer / Cloud Engineer'
  let githubLink = '<a href="https://www.github.com/aldarisbm">GitHub</a>'
  let linkedinLink = '<a href="https://www.linkedin.com/in/aldarisbm/">LinkedIn</a>' 

  let introLength = introString.length
  let i = 0
  let tick = true
  let intervalId = setInterval(printIntro, 150)

  function printIntro(){
    if (i < introLength) {
      intro.innerHTML = intro.innerHTML + introString.charAt(i)
      i++
      if (i == introLength) {
        setTimeout(() => {
          github.innerHTML = githubLink
        }, 1000)
        setTimeout(() => {
          linkedin.innerHTML = linkedinLink
        }, 1750)
        clearInterval(intervalId)
        setInterval(printIntro, 500)
      }
    } else if (i == introLength && tick) {
      intro.innerHTML = introString + '_'
      tick = false
    } else {
      intro.innerHTML = introString + '&nbsp;&nbsp;'
      tick = true
    }
  }
})

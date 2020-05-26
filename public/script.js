document.addEventListener('DOMContentLoaded', () => {

  let introDom = document.getElementById('intro')
  let githubDom = document.getElementById('github')
  let linkedInDom = document.getElementById('linkedIn')

  let introString = 'Cloud Engineer / Software Developer'
  let Github = {
    link : "https://www.github.com/aldarisbm",
    name : "GitHub"
  }

  let LinkedIn = {
    link : "https://www.linkedin.com/in/aldarisbm",
    name : "LinkedIn"
  }

  let githubLink = `<a href="${Github.link}" target="_blank">${Github.name}</a>`
  let linkedInLink = `<a href="${LinkedIn.link}" target="_blank">${LinkedIn.name}</a>`

  let introLength = introString.length
  let i = 0
  let isTicking = true
  let intervalId = setInterval(printIntro, 150)
  let hasRun = false

  function printIntro(){
    switch (true) {
      case (i < introLength):
        introDom.innerHTML += introString.charAt(i)
        i++
        break
      case (i == introLength && !hasRun):
        // Only needs to run once, sets two timeouts for the links to appear on the screen
        setTimeout(() => {
          githubDom.innerHTML = githubLink
        }, 1000)
        setTimeout(() => {
          linkedInDom.innerHTML = linkedInLink
        }, 1750)
        // clears the interval which is faster and resets a slower one for the ticking underscore
        clearInterval(intervalId)
        setInterval(printIntro, 500)
        hasRun = true
        console.log("Thanks for checking out my page, you can also reach me directly at me@joseberr.io")
        break
      case (i == introLength && hasRun):
        if (isTicking) {
          intro.innerHTML = introString + '_'
          isTicking = false
        } else {
          intro.innerHTML = introString + '&nbsp;&nbsp;'
          isTicking = true
        }
        break
    }
  }
})

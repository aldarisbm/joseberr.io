document.addEventListener('DOMContentLoaded', () => {

  let introDom = document.getElementById('intro')
  let githubDom = document.getElementById('github')
  let linkedInDom = document.getElementById('linkedIn')
  let stackOverflowDom = document.getElementById('stackOverflow')

  let introString = 'Cloud & Software Engineer - GenAI Enthusiast'

  let Github = {
    link: 'https://www.github.com/aldarisbm',
    name: 'GitHub'
  }

  let LinkedIn = {
    link: 'https://www.linkedin.com/in/aldarisbm',
    name: 'LinkedIn'
  }

  let StackOverflow = {
    link: 'https://stackoverflow.com/users/9302254/aldarisbm',
    name: 'StackOverflow' 
  }

  let githubLink = `<a href="${Github.link}" target="_blank">${Github.name}</a>`
  let linkedInLink = `<a href="${LinkedIn.link}" target="_blank">${LinkedIn.name}</a>`
  let stackOverflowLink = `<a href="${StackOverflow.link}" target="_blank">${StackOverflow.name}</a>`

  const introLen = introString.length
  const slowerInterval = 150
  const fasterInterval = 600
  const intervalId = setInterval(printIntro, slowerInterval)

  let i = 0
  let isTicking = true
  let hasRun = false

  function printIntro(){
    switch (true) {
      case (i < introLen):
        introDom.innerHTML += introString[i]
        i++
        break
      case (i == introLen && !hasRun):
        // Only needs to run once, sets two timeouts for the links to appear on the screen
        setTimeout(() => {
          githubDom.innerHTML = githubLink
        }, 1000)
        setTimeout(() => {
          linkedInDom.innerHTML = linkedInLink
        }, 1750)
        setTimeout(() => {
          stackOverflowDom.innerHTML = stackOverflowLink
        }, 2500)
        // clears the original interval and resets it to a slower one for the ticking underscore
        clearInterval(intervalId)
        setInterval(printIntro, fasterInterval)
        hasRun = true
        console.log('Thanks for checking out my page, you can also reach me directly at aldarisbm@gmail.com')
        break
      case (i == introLen && hasRun):
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

document.addEventListener('DOMContentLoaded', function(){
})
let intro = document.getElementById('intro')
let githubLink = document.getElementById('github')
let linkedinLink = document.getElementById('linkedin')
let introString = 'Software Developer / Cloud Engineer'
let github = '<a href="https://www.github.com/aldarisbm">GitHub</a>'
let linkedin = '<a href="https://www.linkedin.com/in/aldarisbm/">LinkedIn</a>' 
let lengthOfIntro = introString.length
let i = 0
let repeatFlag = true
let intervalId = setInterval(printIntro, 150)
function printIntro(){
  if (i < lengthOfIntro) {
    intro.innerHTML = intro.innerHTML + introString.charAt(i)
    i++
    if (i == lengthOfIntro) {
      setTimeout(()=>{
        githubLink.innerHTML = github
      }, 1000)
      setTimeout(()=> {
        linkedinLink.innerHTML = linkedin 
      }, 1750)
      clearInterval(intervalId)
      setInterval(printIntro, 500)
    }
  } else if (i == lengthOfIntro && repeatFlag) {
    intro.innerHTML = introString + '_'
    repeatFlag = false
  } else {
    intro.innerHTML = introString + '&nbsp;&nbsp;'
    repeatFlag = true
  }
}

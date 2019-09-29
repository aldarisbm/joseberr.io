document.addEventListener('DOMContentLoaded', function(){
})
let intro = document.getElementById('intro')
let introString = 'Software Developer / Cloud Engineer'
let lengthOfIntro = introString.length
let i = 0
let repeatFlag = true
let intervalId = setInterval(printIntro, 150)
function printIntro(){
  if (i < lengthOfIntro) {
    intro.innerHTML = intro.innerHTML + introString.charAt(i)
    i++
    if (i == lengthOfIntro) {
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
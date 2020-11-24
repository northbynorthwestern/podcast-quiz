var questions = document.querySelectorAll(".question-container")

var count = 0;
var A = 0;
var B = 0;
var C = 0;
var D = 0;

let resultTitleList = ["Guatever", "Tenny's Tunes", "Don't Tell Me Your Major", "Get Cultured"];
let imageList =  ['url("https://northbynorthwestern.com/content/images/2020/10/Guatever-.jpg")', 'url("https://northbynorthwestern.com/content/images/2020/11/Tenny-s-Tunes-Cover-Art.jpeg")', 'url("https://northbynorthwestern.com/content/images/2020/09/don-t-tell-me-your-major-thumbnail.jpg")', 'url("https://storage.pinecast.net/cdn-cgi/image/w=360,h=360,fit=cover,metadata=none/podcasts/covers/2fe9d4de-2066-4ed3-a12d-78fd91fd5b41/reformatted.jpg")'];
let resultContainer = document.querySelector('.answer-result')
let resultTextList = [resultContainer.getAttribute('data-resultA'), resultContainer.getAttribute('data-resultB'), resultContainer.getAttribute('data-resultC'), resultContainer.getAttribute('data-resultD')]
let urlList = ['https://northbynorthwestern.com/guatever-episode-4-part-1-reggaeton/', 'https://northbynorthwestern.com/tennys-tunes-16-what-music-captures-summer/', 'https://northbynorthwestern.com/dont-tell-me-your-major-5-dreams/', 'https://northbynorthwestern.com/get-cultured-2-singapore/']


document.querySelectorAll('.option').forEach(option => option.addEventListener("click", select(option)));


function select(option) {
  return function() {
    if (option.getAttribute('data-option') == "A") {
      A++
    }
    else if (option.getAttribute('data-option') == "B") {
      B++
    }
    else if (option.getAttribute('data-option') == "C") {
      C++
    }
    else if (option.getAttribute('data-option') == "D") {
      D++
    }
    count ++ 
    end_screen()
    
    document.querySelector('.question-container-active').className = 'question-container';
    questions[count-1].className = "question-container-active";
  }
};

function end_screen(){
  if (count==10){
    let scoreList = [A, B, C, D]
    let finalResult = scoreList.indexOf(Math.max(...scoreList))
    let finalHeader = resultTitleList[finalResult]
    document.querySelector(".answer-heading").innerHTML = finalHeader;
    document.querySelector(".answer-text").innerHTML = resultTextList[finalResult];
    document.querySelector('.result-next').className = 'result-next-active'
    document.querySelector('.listen').className = 'listen-active'
    document.querySelector(".listen-active").onclick = function(){window.open(urlList[finalResult])}
    document.querySelector(".answer-image").style.backgroundImage = imageList[finalResult];
    document.querySelector(".answer-image").style.display = 'block';
    document.querySelector(".answer-text").style.display = 'block';
    document.querySelector('.result-next-active').onclick = function(){window.location.reload()}
  }
}




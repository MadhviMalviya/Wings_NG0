
function incrementScoreNumbers() {
    let score1 = document.getElementById("score1");
    let score2 = document.getElementById("score2");
    let score3 = document.getElementById("score3");

    let interval = 10;
    let incrementAmount1 = 100; 
    let incrementAmount2 = 1;   
    let incrementAmount3 = 1;  

    let target1 = 8500;
    let target2 = 18;
    let target3 = 16;

    let current1 = 0;
    let current2 = 0;
    let current3 = 0;


    // function
    function updateScores() {
      if (current1 < target1) {
        current1 += incrementAmount1;
        score1.textContent = current1;
      }

      if (current2 < target2) {
        current2 += incrementAmount2;
        score2.textContent = current2;
      }

      if (current3 < target3) {
        current3 += incrementAmount3;
        score3.textContent = current3;
      }

      if (current1 < target1 || current2 < target2 || current3 < target3) {
        setTimeout(updateScores, interval);
      }
    }

    updateScores();
  }

  window.addEventListener("load", incrementScoreNumbers);



  

quizzes = [];

function unaload(){
  alert("asdasd");
  document.write("Hello World!");
    fetch('./assets/GeneralEducationJsonData/QuestionAndAnswerLetExamReviewer.json').then(res => res.json())
    .then(content => {
    this.quizzes = content.GeneralEducationQuestionAndAnswer;
    });

    loadThis();
}

function loadThis(){
    for(this.i=0;this.i<=this.quizzes.length;this.i++){
      document.write("Hello World!");
    }
}
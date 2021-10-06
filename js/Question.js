class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter correct option number..")
    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h1')
    this.option1 = createElement('h3'); 
    this.option2 = createElement('h4');
    this.option3 = createElement('h5');
    this.option4 = createElement('h6');
    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();

  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(380, 50);

    //Create html() and position() for each question, input and answers.
this.question.html("Question:-What starts with'E' but has only one letter?");
this.question.position(150,120);

this.option1.html("1.Everyone");
this.option1.position(300,200);

this.option2.html("2.Estimate");
this.option2.position(300,230);

this.option3.html("3.Envelope");
this.option3.position(300,260);

this.option4.html("4.Example");
this.option4.position(300,290);

    this.input1.position(250, 400);
    this.button.position(450, 450);
    this.input2.position(550, 400);
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.title.hide();
      this.question.hide();
      var message = this.message.html("Thank You,your answer has been submitted");
      this.message.position(300,230)
    })


  }
}

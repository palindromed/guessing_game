
  (function() {
    var pick = Math.floor(Math.random() * 6);
    var position = pick - 1;
    var count = 2;
    var guess = prompt('Guess which companion I\'m thinking of.').toLowerCase();
    function Game(companion, hair, job, end) {
      this.companion = companion;
      this.hair = hair;
      this.job = job;
      this.end = end;
      this.setAnswer = function() {
        return String(this.companion).toLowerCase();
     };
    }
    var companions = []
    companions[0] = new Game('Donna', 'red', 'temp', 'most tragically' );
    companions[1] = new Game('Rose', 'blonde', 'shopgirl', 'happiest');
    companions[2] = new Game('Martha', 'black', 'doctor', 'amicably');
    companions[3] = new Game('Amelia', 'red', 'kissagram',
      'in a graveyard. She blinked.')
    companions[4] = new Game('Clara', 'brown', 'teacher',
      'in a way we don\'t know yet');

    var answer1 = companions[position].setAnswer();
    while(count > 0) {
      if (guess === answer1) {
        break;
      } else if(count === 2 && guess !== answer1) {
        guess = prompt('Not quite, 2 more tries. The companion you\'re looking for has '
         + companions[position].hair + ' hair').toLowerCase();
        count = count - 1;
      } else if (count === 1 && guess !== answer1) {
        guess = prompt('One last chance! The companion you\'re looking for worked as a '
          + companions[position].job).toLowerCase();
        count = count -1;
      }
    }
    if (guess === answer1) {
      var winning = document.createElement('h2');
      var winMsg = document.createTextNode('Congratulations! The companion was '
       + companions[position].companion + '. Play again to guess a different companion.');
      winning.appendChild(winMsg);
      var locate = document.getElementsByTagName('form')[0];
      locate.appendChild(winning);
    }
    else if (count === 0 && guess !== answer1) {
      var losing = document.createElement('h2');
      var loseMsg = document.createTextNode('Sorry! No more tries. The companion we were looking for was '
        + companions[position].companion + '. Her time with the doctor ended '
        + companions[position].end);
      losing.appendChild(loseMsg);
      var locates = document.getElementsByTagName('form')[0];
      locates.appendChild(losing);

    }
}());


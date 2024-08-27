class GuessingGame {
    cconstructor() {
        let a;
        let b; 
        let c;
    }
    
    setRange(min, max) {
      this.a = min;
      this.b = max;
    }

    guess() {
      this.c = Math.ceil((this.a + this.b)/2);
      return this.c;
    }

    lower() {
       this.b = Math.ceil(this.c);
    }

    greater() {
        this.a = Math.ceil(this.c);
    }
}

module.exports = GuessingGame;

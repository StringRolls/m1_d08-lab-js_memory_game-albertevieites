class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.score = 0;
    this.playedCards = [];
    // add the rest of the class properties here
    this.shuffleCards()
  }

  shuffleCards() {
    // Fisher-Yates algo. Takes two random cards and switches them...
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }

  }

  playCard(card) {
    let turnResult = { isPair: false, cards: [], score: this.score };

    if (this.playedCards.length < 2) this.playedCards.push(card);

    if (this.playedCards.length === 2) {
      if (this.checkIfPair()) {
        this.score += 3;
        turnResult = {
          isPair: true,
          cards: this.playedCards,
          score: this.score
        };
        this.playedCards = [];
      } else {
        this.score -= 1;
        turnResult = {
          isPair: false,
          cards: this.playedCards,
          score: this.score
        };
        this.playedCards = [];
      }
    }
    return turnResult;
  }

  checkIfPair() {
    return (
      this.playedCards[0].getAttribute('data-card-name') ===
      this.playedCards[1].getAttribute('data-card-name')
    );
  }

  checkIfFinished() {
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;

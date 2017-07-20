var Cloze = function(text, cloze) {

    this.text = text;
    this.cloze = this.text.match(/\(([^)]+)\)/)[1];
    this.printCloze = function() {
        console.log(this.cloze);
    }
    this.printText = function() {
        console.log(this.text);
    }

    this.message = this.text.replace('(' + this.cloze + ')', '__________');

}

Cloze.prototype.printAnswer = function() {

    console.log('Wrong!. Answer is: \n' + this.text.replace(/[{()}]/g, ''));
}

module.exports = Cloze;

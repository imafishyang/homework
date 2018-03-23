class PraiseButton {
  constructor(o) {
    this.o = o;
    this.count = this.o.find('.count')
    this.x = parseInt(this.count.html());
  }
  add() {
    this.x++;
    this.count.html(this.x);
  }
}
export default PraiseButton



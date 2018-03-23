import PraiseButton from './PraiseButton.js';
class BigHand extends PraiseButton {
  constructor(o) {
    super(o);
    this.bind();
  }
  bind() {
    this.o.on('click', () => {
      this.add();
    });
  }
};
export default BigHand;
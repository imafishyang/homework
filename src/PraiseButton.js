class PraiseButton {
  constructor(o) {
    this.o = o;
    this.count = this.o.find('.count');
    this.x = 0;
    this.reset();
  }
  reset() {
    axios.get('/api/getHandCount').then((res) => {
      const d = res.data;
      if (d.status == 1) {
        this.x = d.total
        this.appendHtml()
      } else {
        console.log('getHandCount is error')
      }
    });
  }
  appendHtml() {
    this.count.html(this.x);
  }
  add() {
    axios.post('/api/changeHandCount').then((res) => {
      const d = res.data;
      if (d.status == 1) {
        this.x++;
        this.appendHtml()
      } else {
        console.log('changeHandCount is error')
      }
    });
  }
}
export default PraiseButton
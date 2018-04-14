class PraiseButton {
  constructor(o) {
    this.o = o;
    this.count = this.o.find('.count');
    this.x = 0;
    this.reset();
    this.timer;
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
    this.dilute(this.addDo,5000)();
  }
  addDo() {
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
  dilute(fn,wait){
      return ()=>{
          if(!this.timer){
              this.timer = setTimeout(()=>{this.timer=null;},wait)
              fn.apply(this);
          }else{
            console.log('防抖了')
          }
      }
  }
}
export default PraiseButton
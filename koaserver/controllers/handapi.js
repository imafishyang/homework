const axios = require('axios');
module.exports = {
  /**
   * 获取当前点击数
   * @param  {obejct} ctx 上下文对象
   */
  async getCount( ctx ) {
    const data =  await axios.get('http://47.98.114.121:30000/api/1').then((res)=>{
        return res.data;
    });
    ctx.body = data;
  },

  /**
   * 点击数+1
   * @param   {obejct} ctx 上下文对象
   */
  async changeCount( ctx ) {
    const data =  await axios.post('http://47.98.114.121:30000/api/',{id:1}).then((res)=>{
        return res.data;
    });
    ctx.body = data;
  }

}
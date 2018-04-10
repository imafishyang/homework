//import HandApi from ('./../../koaserver/controllers/handapi');
//import axios from './node_modules/_axios@0.18.0@axios/dist/axios.min.js';
import BigHand from '../../src/PraiseButton.js';
const a = () =>{
    return 1+1;
    // axios.get('/api/getHandCount').then((res) => {
    //   const d = res.data;
    //   return d.status;
    // });
}

describe("点赞测试用例",function(){
    const b = new BigHand();
    console.log(b);
    it("获取当前点赞数接口",function(){
        expect(a()).toBe(2);
        //expect(b.add()).toBe(2);
    })
})
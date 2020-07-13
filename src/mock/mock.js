import Mock from 'mockjs'
import data from './data.json'

Mock.mock('http://www.google.com/getList', {datqa:data.list})

let Random = Mock.Random;
// eslint-disable-next-line no-unused-vars
let request =req=>{
    let resultLst = [];
    for (let i=0; i<100;i++) {
        let result = {
            id: 1,
            name: Random.name(),
            age: Random.integer()
        };
        resultLst.push(result);
    }
    return resultLst;
};
Mock.mock('http://www.google.com/getVarietyItem', request)
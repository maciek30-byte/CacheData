

import CoreApp from "./components/CoreApp";



const testCore = new CoreApp();

testCore.cachingData('Rowling').then((r)=> {
    console.log('array before first',testCore.searchingArray)
    testCore.cachingData('Rowling').then((r)=> console.log('this is response',r))
})



import  { createStore } from 'redux';
import counterReduce from './reducers/countReduce';
// import store from './store';


const store = createStore(counterReduce)

export default store;
// when using this line, the error is shown
const { H } = require('./test');

// when using this line, the error is gone
// import { H } from './test';

export default class extends H {
    newProperty: any;
}
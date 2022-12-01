import { create } from 'express-handlebars';

const hbs = create({
    defaultLayout: 'main',
    helpers: {
        console: function(value:any) {
            // console.log({value});
        }
    }
})


export default hbs
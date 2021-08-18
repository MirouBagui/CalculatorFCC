export const initialState = {
    numbers : [
        {
        nine:9,
        eight:8,
        seven:7,
        six:6,
        five:5,
        four:4,
        one:1,
        two:2,
        three:3,
        zero:0,
        decimal:".",
        }
    ],
    
    operation: [
        {
        clear:"C",
        add:"+",
        subtract:"-",
        multiply:"*",
        equals:"=",
        divide:"/",
    }],
    calc: '0',
    lastPressed: '',
    evaluate: false
}
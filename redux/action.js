// AC換Ｃ

export const number1 = (number) => (
    {
        type: 'NUMBER1',
        number
    }
)

export const number2 = (number) =>(
    {
        type: 'NUMBER2',
        number
    }
)

export const number3 = (number1,number2) =>(
    {
        type: 'NUMBER3',
        number1,
        number2
    }
)



//運算
export const plus = (number1,number2) => (
    {
        type:'PLUS',
        number1,
        number2,
    }
)

export const minor = (number1,number2) => (
    {
        type:'MINOR',
        number1:number1,
        number2:number2,
    }
)

export const multiply = (number1,number2) => (
    {
        type:'MULTIPLY',
        number1:number1,
        number2:number2,
    }
) 

export const division = (number1,number2) => (
    {
        type:'DIVISION',
        number1:number1,
        number2:number2,
    }
)
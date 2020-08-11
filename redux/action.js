// AC換Ｃ

export const AC = () => (
    {
        type: 'AC'
    }
)

export const C = () =>(
    {
        type: 'C'
    }
)


//運算
export const plus = (number1,number2) => (
    {
        type:'PLUS',
        number1:number1,
        number2:number2,
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
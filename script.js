// This function determines which value is higher or if both values are equal
function compare()
{
    let valueA = prompt("Please enter a number:", '');
    let valueB = prompt("Please enter another number:", '');

    if(valueA > valueB)
    {

        alert(`Value A is higher.`);

    } else if(valueB > valueA) {

        alert(`Value B is higher.`);

    } else if(valueA == valueB) {

        alert(`Equal.`);

    } else {

        alert(`Please input valid numbers.`);

    }
}
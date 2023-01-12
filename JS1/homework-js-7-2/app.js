let typeNumber1 = document.querySelector('.typeNumber1')
let typeNumber2 = document.querySelector('.typeNumber2')
let decided;
document.querySelector('.addBtn').onclick = function () {
    if (typeNumber1.value === '' && typeNumber2.value === '') {
        alert('Please type number')
    } else {
        let result;
        let numberFieldValue1 = +typeNumber1.value
        let numberFieldValue2 = +typeNumber2.value
        switch (decided) {
            case '+':
                result = numberFieldValue1 + numberFieldValue2
                break;
            case '-':
                result = numberFieldValue1 - numberFieldValue2
                break;
            case '*':
                result = numberFieldValue1 * numberFieldValue2
                break;
        }
        (document.querySelector('.solutions').innerHTML
            += `
            
        <div class="solution">
        <span class="solutionName">${result}</span>
        </div>
        `)
    }
    typeNumber1.value = '';
    typeNumber2.value = '';
}

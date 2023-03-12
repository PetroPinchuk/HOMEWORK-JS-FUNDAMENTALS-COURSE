// Вася працює програмістом і отримує 50$ за кожні 100 рядків коду(99 рядків - 0$, 199 рядків - 50$).
// За кожне третє запізнення Васю штрафують на 20$. Реалізувати меню :
// - користувач вводить бажаний дохід Васі і кількість запізнень, порахувати, скільки рядків коду йому треба написати
// - користувач вводить кількість рядків коду, написану Васею, і бажаний обсяг Порахувати, скільки разів Вася може запізнитися.
// - користувач вводить кількість рядків коду і кількість запізнень, визначити, скільки грошей заплатять Васі і чи заплатять взагалі. 

const desiredIncome = parseInt(prompt('Введіть бажаний дохід Васі:'));
const numberOfDelays = parseInt(prompt('Введіть кількість запізнень Васі:'));

const noPayLines = 99;
const payLines = 100;
const payPer100Lines = 50;

function calculateLinesOfCode(salary, lateDeliveries) {
    const mustHaveLinesOfCode = Math.floor(salary / (payPer100Lines * (1 + lateDeliveries / 3)));
    const overLinesOfCode = lateDeliveries * payLines;
    const totalLinesOfCode = mustHaveLinesOfCode * payLines + overLinesOfCode;
    
    console.log(`Щоб заробити $${desiredIncome}, при такій кількості запізнень, Вася повинен написати ${totalLinesOfCode} рядків коду.`);
    return totalLinesOfCode
}

calculateLinesOfCode(desiredIncome, numberOfDelays);



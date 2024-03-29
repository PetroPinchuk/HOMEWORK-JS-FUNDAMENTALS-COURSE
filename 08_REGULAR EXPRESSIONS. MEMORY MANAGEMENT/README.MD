# 8. REGULAR EXPRESSIONS. MEMORY MANAGEMENT
📀💿💿💿

## 8-1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
Приклад роботи:
- `upperCase('regexp');` 
- `"String's not starts with uppercase character"`
- `upperCase('RegExp');`
- `"String's starts with uppercase character"`



## 8-2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
Приклад роботи:
- `checkEmail("Qmail2@gmail.com");`
- `true`



## 8-3. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
Приклад роботи:
- `Вхідний рядок    "Java Script"`
- `Вихід    “Script, Java”`


## 8-4. Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).


## 8-5. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
Вимоги:
•  Цифри (0-9).
•  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
•  В тілі емейла допустимі лишеі символи `“_”` і `“-”`. Але вони не можуть бути 1-им символом емейлу.
 •  Символ `“-”` не може повторюватися.

- `checkEmail('my_mail@gmail.com');`
- `"Email is correct!"`
- `checkEmail('#my_mail@gmail.com');`
- `"Email is not correct!"`
- `checkEmail('my_ma--il@gmail.com');`
- `"Email is not correct!"`



## 8-6. Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).

Приклад роботи:

`checkLogin('ee1.1ret3');`
`true `
`//1.1, 3`

`checkLogin('ee1*1ret3');`
`false `
//1, 1, 3
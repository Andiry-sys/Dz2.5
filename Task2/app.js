class ExtendedDate extends Date {
  constructor(date) {
    super();
    this.date = new Date(date);
  }

  textDate() {
    let resultNumb,
      stringDate = this.date.getDate().toString();

    let month = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ];
    let numb1 = [
      'первое',
      'второе',
      'третье',
      'четвёртое',
      'пятое',
      'шестое',
      'седьмое',
      'восьмое',
      'девятое',
      'десятое',
    ];
    let numb2 = [
      'один',
      'две',
      'три',
      'четыр',
      'пят',
      'шест',
      'сем',
      'восем',
      'девят',
    ];
    let numb3 = ['двадцать', 'тридцать'];
    let numb4 = ['двадцатое', 'тридцатое'];

    if (this.date.getDate() < 11) resultNumb = numb1[this.date.getDate() - 1];
    else if (this.date.getDate() < 20)
      resultNumb = numb2[this.date.getDate() - 11] + 'надцатое';
    else if (this.date.getDate() == 20 || this.date.getDate() == 30)
      resultNumb = numb4[stringDate[0] - 2];
    else if (this.date.getDate() <= 31)
      resultNumb = numb3[stringDate[0] - 2] + ' ' + numb1[stringDate[1] - 1];

    return (
      'Дата: ' +
      resultNumb.slice(0, 1).toUpperCase() +
      resultNumb.slice(1) +
      ' ' +
      month[this.date.getMonth()] +
      ' ' +
      this.date.getFullYear()
    );
  }

  checkLeapYear() {
    let year = this.date.getFullYear();
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
      return 'Да, високосный';
    else return 'Нет, не високосны';
    console.log(this.date.getFullYear());
  }
  nextDay() {
    this.date.setDate(this.date.getDate() + 1);
    return 'Завтра:' + this.textDate().replace('Дата:', '');
  }

  checkDay() {
    return this.date > this ? 'Это будущая дата ' : 'Это прошедшая дата';
  }
}

let date1 = new ExtendedDate('1.29.2022');
console.log(date1.textDate());
console.log(date1.checkLeapYear());
console.log(date1.checkDay());
console.log(date1.nextDay());

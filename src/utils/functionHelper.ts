import { v4 as uuidv4 } from 'uuid';

import { TasksDto } from '../tasks/dto/createTasksDto';

export function generateTasks(): TasksDto {
  const formula1 = 'CH₄ + 2O₂ → CO₂ + 2H₂O + 900 кДж';
  const formula2 = '2Fe(ТВ) + 3/2О₂(Г) → Fe₂О₃(ТВ) + 817 кДж';
  const formula3 = '2Mg + O₂ → 2MgO + 1204 кДж';
  const formula4 = '2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O + 2610 кДж';
  const formula5 = '3Fe₃O₄(ТВ) + 8Al(ТВ) → 9Fe(ТВ) + 4Al₂O(ТВ) + 3330 кДж';
  const formula7 = 'C + O₂ → CO₂ + 402,24 кДж';
  const formula8 = '2С₂Н₂(Г) + 5О₂(Г) → 4СО₂(Г)+ 2Н₂О(Г) + 2602,4 кДж';
  const formula9 = '2Аl(ТВ) + 3/2О₂(Г) → Аl₂О₃(ТВ) + 1676 кДж';
  const formula10 = '2С₃Н₈(Г) + 10О₂(Г) → 6СО₂(Г) + 8Н₂О(Ж) + 4440 кДж';
  const formula11 = '2KClO₃ → 2KCl + 3O₂ + 91 кДж';
  const formula12 = 'H₂ + Cl₂ → 2HCl + 184,36 кДж';
  const formula13 = 'C + O₂ → CO₂ + 402,24 кДж';
  const formula15 = '4FeS₂(ТВ) + 11O₂(Г) → 8SO₂(Г) + 2Fe₂O₃ + 3310 кДж';
  const formula16 = 'N₂(Г) + O₂(Г) → 2NO(Г) + 180 кДж';

  let random_number: number = 10 + (Math.random() * 500) / 100;
  const inTextNumberForOneTask: number = random_number * 0.25;
  const inTextNumberForOtherTask: number = inTextNumberForOneTask * 16;

  const answer1: number = inTextNumberForOneTask * 900;
  const answer2: number = inTextNumberForOtherTask * 50.1923077;
  const answer3: number = inTextNumberForOtherTask * 33.52;
  const answer4: number = inTextNumberForOtherTask * 0.0580892857;
  const answer5: number = inTextNumberForOtherTask * 99.1071429;
  const answer6: number = inTextNumberForOtherTask * 3 / 91 * 22.4;
  const answer7: number = inTextNumberForOtherTask * 2 / 184.36 * 22.4;
  const answer8: number = inTextNumberForOtherTask * 12 / 402.24;
  const answer9: number = inTextNumberForOtherTask * 817 / (2 * 55.85);
  const answer10: number = inTextNumberForOtherTask * 15.025;
  const answer11: number = inTextNumberForOtherTask * 8.16176471;
  const answer12: number = inTextNumberForOtherTask * 16.4313725;
  const answer13: number = ((inTextNumberForOtherTask * 8) / 3310) * 22.4;
  const answer14: number = (inTextNumberForOtherTask / 180) * 22.4;

  let taskArray: TasksDto[] = [
    {
      id: uuidv4(),
      text:
        'По термохимическому уравнению горения метана определите, сколько выделиться теплоты, если сгорело ' +
        inTextNumberForOtherTask.toFixed(2) +
        'г метана.',
      answer: answer1.toFixed(2) + ' кДж.',
      formula: formula1,
    },
    {
      id: uuidv4(),
      text:
        'По термохимическому уравнению горения ацетилена определите, сколько выделиться теплоты, если сгорело ' +
        inTextNumberForOtherTask.toFixed(2) +
        'г ацетилена.',
      answer: answer2.toFixed(2) + ' кДж.',
      formula: formula4,
    },
    {
      id: uuidv4(),
      text:
        'По термохимическому уравнению горения метана определите, сколько выделиться теплоты, если сгорело ' +
        inTextNumberForOtherTask.toFixed(2) +
        'г метана.',
      answer: answer3.toFixed(2) + ' кДж.',
      formula: formula7,
    },
    {
      id: uuidv4(),
      text:
        'По термохимическому уравнению горения ацетилена определите, сколько выделиться теплоты, если сгорело ' +
        inTextNumberForOtherTask.toFixed(2) +
        'мл ацетилена.',
      answer: answer4.toFixed(2) + ' кДж.',
      formula: formula8,
    },
    {
      id: uuidv4(),
      text:
        'По термохимическому уравнению горения пропана определите, сколько выделиться теплоты, если сгорело ' +
        inTextNumberForOtherTask.toFixed(2) +
        'л пропана.',
      answer: answer5.toFixed(2) + ' кДж.',
      formula: formula10,
    },
    {
      id: uuidv4(),
      text:
        'Какой объем кислорода (при н.у.) выделится в результате реакции, если на разложение бертолетовой соли было затрачено ' +
        inTextNumberForOtherTask.toFixed(2),
      answer: answer6.toFixed(2) + ' л.',
      formula: formula11,
    },
    {
      id: uuidv4(),
      text:
        'По термохимическому уравнению рассчитайте, какой объем затрачен на образование хлороводорода (при н.у.), если при этом выделилось ' +
        inTextNumberForOtherTask.toFixed(2),
      answer: answer7.toFixed(2) + ' л.',
      formula: formula12,
    },
    {
      id: uuidv4(),
      text:
        'Определить кол-во сгоревшего угля, если в ходе горения было выделено ' +
        inTextNumberForOtherTask.toFixed(2) +
        'кДж энергии.',
      answer: answer8.toFixed(2) + ' г.',
      formula: formula13,
    },
    {
      id: uuidv4(),
      text:
        'Определите тепловой эффект реакции, в которой из ' +
        inTextNumberForOtherTask.toFixed(2) +
        'г железа и необходимого количества кислорода образовался оксид железа(III).',
      answer: answer9.toFixed(2) + ' кДж.',
      formula: formula2,
    },
    {
      id: uuidv4(),
      text:
        'Определите количество теплоты, которое выделится при образовании ' +
        inTextNumberForOtherTask.toFixed(2) +
        'г MgO  в результате реакции горения магния, с помощью термохимического уравнения.',
      answer: answer10.toFixed(2) + ' кДж.',
      formula: formula3,
    },
    {
      id: uuidv4(),
      text:
        'Определите тепловой эффект реакции, в которой из ' +
        inTextNumberForOtherTask.toFixed(2) +
        'г алюминия и необходимого количества кислорода образовался оксид алюминия.',
      answer: answer11.toFixed(2) + ' кДж.',
      formula: formula5,
    },
    {
      id: uuidv4(),
      text:
        'В результате реакции выделилось ' +
        inTextNumberForOtherTask.toFixed(2) +
        'кДж теплоты. Определите объем(л) выделившегося диоксида серы(н.у.)',
      answer: answer13.toFixed(2) + ' л.',
      formula: formula15,
    },
    {
      id: uuidv4(),
      text:
        'Определите тепловой эффект реакции, в которой из ' +
        inTextNumberForOtherTask.toFixed(2) +
        'г алюминия и необходимого количества кислорода образовался оксид алюминия.',
      answer: answer12.toFixed(2) + ' кДж.',
      formula: formula9,
    },
    {
      id: uuidv4(),
      text:
        'Какой объем азота нужно сжечь, чтобы поглотилось ' +
        inTextNumberForOtherTask.toFixed(2) +
        ' тепла?',
      answer: answer14.toFixed(2) + ' л.',
      formula: formula16,
    },
  ];
  const randomTask: number = Math.floor(Math.random() * 13 + 1);

  return taskArray[randomTask];
}

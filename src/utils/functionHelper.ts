export function generateTasks() {
  const random = Math.random();

  // формула, по которой будет решаться задача
  const formula1: string = 'CH₄ + 2O₂ → CO₂ + 2H₂O + 900 кДж';
  const formula2: string = '2Fe(ТВ) + 3/2О₂(Г) → Fe₂О₃(ТВ) + 817 кДж';
  const formula3: string = '2Mg + O₂ → 2MgO + 1204 кДж';
  const formula4: string = '2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O + 2610 кДж';
  const formula5: string =
    '3Fe₃O₄(ТВ) + 8Al(ТВ) → 9Fe(ТВ) + 4Al₂O(ТВ) + 3330 кДж';
  const formula6: string = 'C + O₂ → CO₂ + 402,24 кДж';
  const formula7: string = '2С₂Н₂(Г) + 5О₂(Г) → 4СО₂(Г)+ 2Н₂О(Г) + 2602,4 кДж';
  const formula8: string = '2Аl(ТВ) + 3/2О₂(Г) → Аl₂О₃(ТВ) + 1676 кДж';
  const formula9: string = '2С₃Н₈(Г) + 10О₂(Г) → 6СО₂(Г) + 8Н₂О(Ж) + 4440 кДж';
  const formula10: string = '2KClO₃ → 2KCl + 3O₂ + 91 кДж';
  const formula11: string = 'H₂ + Cl₂ → 2HCl + 184,36 кДж';
  const formula12: string = 'C + O₂ → CO₂ + 402,24 кДж';
  const formula13: string = '4FeS₂(ТВ) + 11O₂(Г) → 8SO₂(Г) + 2Fe₂O₃ + 3310 кДж';
  const formula14: string = 'N₂(Г) + O₂(Г) → 2NO(Г) + 180 кДж';

  const name: string[] = []; //массив на вывод задачи с ответом
  const zd: number = 0;
  const rd_1: number = 10;
  const rd_2: number = 500;

  const k: number = rd_1 + Math.random() * rd_2;
  const random_number: number = k / 100; // эта и предыдущая строки генерируют случаное число от 0.1 до 5 с шагом 0.01, которое задействуется для генерации самой задачи
  console.log(random_number.toFixed(2));
  const c = random_number * 0.25;
  const text_zadachi: number = c * 16;

  // //здесь происходит расчет задач
  // otvet = new BigDecimal(c * 900 / 1);
  // otvet2 = otvet.setScale(2, RoundingMode.HALF_UP);
  // String otvet3 = otvet2 + "";
  //
  // acotvet = new BigDecimal(text_zadachi * 50.1923077);
  // acotvet2 = acotvet.setScale(2, RoundingMode.HALF_UP);
  // String acotvet3 = acotvet2 + "";
  //
  // cotvet = new BigDecimal(text_zadachi * 33.52);
  // cotvet2 = cotvet.setScale(2, RoundingMode.HALF_UP);
  // String cotvet3 = cotvet2 + "";
  //
  // ac_2_otvet = new BigDecimal(text_zadachi * 0.0580892857);
  // ac_2_otvet2 = ac_2_otvet.setScale(2, RoundingMode.HALF_UP);
  // String ac_2_otvet3 = ac_2_otvet2 + "";
  //
  // potvet = new BigDecimal(text_zadachi * 99.1071429);
  // potvet2 = potvet.setScale(2, RoundingMode.HALF_UP);
  // String potvet3 = potvet2 + "";
  //
  // ootvet = new BigDecimal(text_zadachi * 3 / 91 * 22.4);
  // ootvet2 = ootvet.setScale(2, RoundingMode.HALF_UP);
  // String ootvet3 = ootvet2 + "";
  //
  // hotvet = new BigDecimal(text_zadachi * 2 / 184.36 * 22.4);
  // hotvet2 = hotvet.setScale(2, RoundingMode.HALF_UP);
  // String hotvet3 = hotvet2 + "";
  //
  // uotvet = new BigDecimal(text_zadachi * 12 / 402.24);
  // uotvet2 = uotvet.setScale(2, RoundingMode.HALF_UP);
  // String uotvet3 = uotvet2 + "";
  //
  // zotvet = new BigDecimal((text_zadachi * 817) / (2 * 55.85));
  // zotvet2 = zotvet.setScale(2, RoundingMode.HALF_UP);
  // String zotvet3 = zotvet2 + "";
  //
  // mgotvet = new BigDecimal(text_zadachi * 15.025);
  // mgotvet2 = mgotvet.setScale(2, RoundingMode.HALF_UP);
  // String mgotvet3 = mgotvet2 + "";
  //
  // alotvet = new BigDecimal(text_zadachi * 8.16176471);
  // alotvet2 = alotvet.setScale(2, RoundingMode.HALF_UP);
  // String alotvet3 = alotvet2 + "";
  //
  // al_2_otvet = new BigDecimal(text_zadachi * 16.4313725);
  // al_2_otvet2 = al_2_otvet.setScale(2, RoundingMode.HALF_UP);
  // String al_2_otvet3 = al_2_otvet2 + "";
  //
  // fesotvet = new BigDecimal(text_zadachi * 8 / 3310 * 22.4);
  // fesotvet2 = fesotvet.setScale(2, RoundingMode.HALF_UP);
  // String fesotvet3 = fesotvet2 + "";
  //
  // notvet = new BigDecimal(text_zadachi * 1 / 180 * 22.4);
  // notvet2 = notvet.setScale(2, RoundingMode.HALF_UP);
  // String notvet3 = notvet2 + "";
  //
  // //текст задачи с ответом
  // name = new String[14];
  // name[0] = (formula1) + "\r\n\r\nПо термохимическому уравнению горения метана определите, сколько выделиться теплоты, если сгорело " + text_zadachi + "г метана." + "\n\nОтвет: " + (otvet3) + " кДж.";
  // name[1] = (formula4) + "\r\n\r\nПо термохимическому уравнению горения ацетилена определите, сколько выделиться теплоты, если сгорело " + text_zadachi + "г ацетилена." + "\n\nОтвет: " + (acotvet3) + " кДж.";
  // name[2] = (formula7) + "\r\n\r\nПо термохимическому уравнению горения метана определите, сколько выделиться теплоты, если сгорело " + text_zadachi + "г метана." + "\n\nОтвет: " + (cotvet3) + " кДж.";
  // name[3] = (formula8) + "\r\n\r\nПо термохимическому уравнению горения ацетилена определите, сколько выделиться теплоты, если сгорело " + text_zadachi + "мл ацетилена." + "\n\nОтвет: " + (ac_2_otvet3) + " кДж.";
  // name[4] = (formula10) + "\r\n\r\nПо термохимическому уравнению горения пропана определите, сколько выделиться теплоты, если сгорело " + text_zadachi + "л пропана." + "\n\nОтвет: " + (potvet3) + " кДж.";
  // name[5] = (formula11) + "\r\n\r\nКакой объем кислорода (при н.у.) выделится в результате реакции, если на разложение бертолетовой  соли было  затрачено." + "\n\nОтвет: " + (ootvet3) + " л.";
  // name[6] = (formula12) + "\r\n\r\nПо термохимическому уравнению рассчитайте, какой объем затрачен на образование хлороводорода (при н.у.), если при этом выделилось." + "\n\nОтвет: " + (hotvet3) + " л.";
  // name[7] = (formula13) + "\r\n\r\nОпределить кол-во сгоревшего угля, если в ходе горения было выделено  " + text_zadachi + "  кДж энергии." + "\n\nОтвет: " + (uotvet3) + " г.";
  // name[8] = (formula2) + "\r\n\r\nОпределите тепловой эффект реакции, в которой из " + text_zadachi + "г железа и необходимого количества кислорода образовался оксид железа(III)." + "\n\nОтвет: " + (zotvet3) + " кДж.";
  // name[9] = (formula3) + "\r\n\r\nОпределите количество теплоты, которое выделится при образовании " + text_zadachi + " г MgO  в результате реакции горения магния, с помощью термохимического уравнения." + "\n\nОтвет: " + (mgotvet3) + " кДж.";
  // name[10] = (formula5) + "\r\n\r\nОпределите тепловой эффект реакции, в которой из " + text_zadachi + "г алюминия и необходимого количества кислорода образовался оксид алюминия." + "\n\nОтвет: " + (alotvet3) + " кДж.";
  // name[11] = (formula9) + "\r\n\r\nОпределите тепловой эффект реакции, в которой из " + text_zadachi + "г алюминия и необходимого количества кислорода образовался оксид алюминия." + "\n\nОтвет: " + (al_2_otvet3) + " кДж.";
  // name[12] = (formula15) + "\r\n\r\nВ результате реакции выделилось " + text_zadachi + "кДж теплоты. Определите объем(л) выделившегося диоксида серы(н.у.)" + "\n\nОтвет: " + (fesotvet3) + " л.";
  // name[13] = (formula16) + "\r\n\r\nКакой объем азота нужно сжечь, чтобы поглотилось " + text_zadachi + " тепла?" + "\n\nОтвет: " + (notvet3) + " л.";
  //
  // zd = rd.nextInt(14);
  // tvTxt.setText(name[zd]);
}

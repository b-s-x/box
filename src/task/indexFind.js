console.log("\u{1F595}");

let str = 'медведь ел мед с медвежатами';

let target = 'мед'; 

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(( `Найдено тут: ${foundPos}` ));
  pos = foundPos + 1; 
}
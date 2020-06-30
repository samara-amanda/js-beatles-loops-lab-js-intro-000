// add solution here
function theBeatlesPlay(musicians, instruments) {
  let list = []

  for (let counter = 0; counter < musicians.length; counter++) {
    let currentMusician = musicians[counter];
    let currentInstrument = instruments[counter];
    let currentSentence = `${currentMusician} plays ${currentInstrument}`
    list.push(currentSentence);
  }
  return list
}

function johnLennonFacts(facts) {
  let i = 0;
  let array = []


  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i += 1
  }
  return array
}

function iLoveTheBeatles(number) {
  let i = 0;
  let array = [];

  do {
    array.push("I love the Beatles!");
    number++
  } while (number < 15);
    return array


}

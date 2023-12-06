const taroDiv = document.querySelector('.taro')
const input = document.createElement('input')
input.type = 'date'
input.id = 'date'
input.setAttribute('name', 'date')
taroDiv.appendChild(input)
const button = document.createElement('button')
button.classList.add('button-49')
taroDiv.appendChild(button).innerText = 'Your Taro'
const resultDiv = document.createElement('div')
resultDiv.classList.add('container')
taroDiv.appendChild(resultDiv)
const taroImg = document.createElement('img')
taroImg.classList.add('taroImg')
resultDiv.appendChild(taroImg)
const taroNumberName = document.createElement('h1')
taroNumberName.classList.add('description')
resultDiv.appendChild(taroNumberName)
const taroDescription = document.createElement('h3')
taroDescription.classList.add('description')
resultDiv.appendChild(taroDescription)


button.onclick = () => {
  let val = document.getElementById('date');
  console.log(val.value)
  for (const taro of taroCards) {
    if (taro.isThisTaro(val.value)) {
      taroImg.src = taro.img
      taroNumberName.innerHTML = `${taro.dig} : ${taro.name}`
      taroDescription.innerHTML = taro.discribe
    }
  }
}


function birthday(str) {
  str = str.split('.').map((item) => {
    return item.split('')
  }).flat().reduce((acc, cur) => {
    return Number(acc) + Number(cur)
  }, 0)
  if (str >= 22) {
    return str - 22
  }
  return str
}

function createTaro(name, dig, img, discribe) {
  return {
    name: name,
    dig: dig,
    img: img,
    discribe: discribe,

    isThisTaro(date) {
      date = date.replace(/[^+\d]/g, '')
      const result = birthday(date)
      if (result === this.dig) {
        return true
      }
      return false
    }
  }
}

const taroCards = [
  createTaro('Fool', 0, 'img/thefool.png', 'The Fool symbolizes the beginning of a journey. You brim with enthusiasm, yet remain unaware of both your capabilities and the threats you face. \n The Fool is everyone – including you and me. Each step he takes on his journey feels like stepping into a brave new world. Ultimately, the journey will change him. But as the card shows, he\'s a trustworthy lad whose tireless hope drives him toward his goal.'),
  createTaro('The Magician', 1, 'img/themagician.png', 'You must fight his destructive influence. I... I think we both know who that is. \n The Magician is the card of self-confidence and adapting to situations through intellect and sheer will. The Magician is a schemer who always has one last trick up his sleeve, who despite everything manages to stay afloat and remain in control of his own destiny.'),
  createTaro('Death', 13, 'img/thedeath.png', 'Your adversaries will turn you against yourself. The journey will bring either transformation or destruction. \n Death is the card of becoming. It signifies an imminent and difficult transition – the conclusion of one phase of life and the beginning of another. Inevitably, something gets lost during the transformation, but something else will rise to take its place.'),
  createTaro('Judgment', 20, 'img/thejudgment.png', 'Judgment is the card of renewal. The angel blowing into the horn heralds resurrection and liberation. This card foretells an important change that will result in healing or fulfillment. It is also a symbol of self-worth.'),
  createTaro('Justice', 11, 'img/thejustice.png', 'Be very careful with those you meet. Not all will be worthy of your trust. \n Justice is the card of conflict resolution. It proclaims the need for order, to see through lies and deceit, and a return to the natural state of affairs. Justice implies a just sentence, but also due process.'),
  createTaro('Strength', 8, 'img/thestrength.png', 'Strength of will, discipline and courage will always be rewarded... \n Strength is the card of resilience. It is associated with determination, bravery and internal struggle. One must have dedication in order to overcome obstacles and reach one\'s goal. Strength is about physical prowess and spiritual fortitude – the power that must be unleashed to achieve the impossible.'),
  createTaro('Temperance', 14, 'img/thetemperance.png', 'You\'re ready to shift the balance of your life. You might succeed, as long as you can reconcile what is now at odds.Temperance is the card of balance. It may symbolize self-restraint or the gradual shift toward a more mature state of equilibrium. Temperance is associated with being in control of oneself as well as the desire to achieve inner peace.'),
  createTaro('The Chariot', 7, 'img/thechariot.png', 'You\'re ready for change, ready to seek the truth about yourself. And to help, you\'ll have... Someone from your family? \n The Chariot is always charging ahead despite being pulled by its steeds in opposite directions. The rider who steers it constantly reins in the light and dark sides of the soul with the help of Reason. To ride in The Chariot is to experience highs and lows – ups and downs.'),
  createTaro('The Devil', 15, 'img/thedevil.png', 'You will find yourself under the influence of powerful people with unclear motives. Be very careful.\nThe Devil is addiction, craving and passion. He brings fame and fortune, but at the price of losing oneself to a world of material distractions. The Devil lures unsuspecting souls into traps, but always grants them a choice. One can try their luck and take him up on his offer, but one should always know when to call quits.'),
  createTaro('The Emperor', 4, 'img/theemperor.png', 'The Emperor represents patriarchal control and is pleased with the authority and power he possesses to shape the future. The Emperor makes the rules and enforces them for the common good. But prestige has its dark sides – the Emperor is dominating and ruthless and will climb over a mountain of bodies to achieve his aim.'),
  createTaro('The Empress', 3, 'img/theempress.png', 'The Empress is a card of femininity and motherhood. She is authoritative, knows what she wants, and exhibits refinement and sensuousness. The Empress symbolizes creativity and growth, and instructs us not to dismiss our unconscious impulses, but to trust our intuition.'),
  createTaro('The Hanged Man', 12, 'img/thehangedman.png', 'You\'re at a crossroads, V. Time to take a hard look at your situation, find the right path. You\'ll be put to a test.The Hanged Man is the card of sacrifice. It says that a price must be paid in order to achieve enlightenment. The Hanged Man\'s forsakenness opens the path for rebirth into a new life, though this path is wrought with pain suspended in time and ultimately ends in Death.'),
  createTaro('The Hermit', 9, 'img/thehermit.png', 'In solitude, he discovers the truth about himself and the world. From this he draws strength, his lantern cutting through the darkness. Could be you... Or someone who shows you kindness. \n The Hermit is a card of self-imposed isolation. It represents an escape from the hustle and bustle of the city, a turning away from constant newness toward Ye Olde ways. For the hermit, solitude is the road to the sublime – a road that is taken not with great bounds and strides, but with small, concentrated steps.'),
  createTaro('The Hierophant', 5, 'img/thehierophant.png', 'He brings crisis, both of life and authority, rebellion and fanaticism... He is a grave threat. \n The Hierophant symbolizes a respect for tradition. It represents one who tries to maintain the established order, even though their very character is shaped by it. The Hierophant places his faith in institutions – for the alternative is pure chaos. Only by placing his faith in order can he draw strength.'),
  createTaro('The High Priestess', 2, 'img/thehighpriestess.png', 'Do not seek simple answers. Be open to your intuition, your subconscious, your dreams. \n The High Priestess is a card of mystery. It shows how all our secrets hang by a delicate thread and the struggle between common sense and intuition. The High Priestess symbolizes the cold, calm waters as well as the mysteries hidden in their depths.'),
  createTaro('The Lovers', 6, 'img/thelovers.png', 'You are surrounded by a force that will challenge you. You will also come into conflict with another, inner force. \n The Lovers is the card of dichotomies. It points to the contradictions that clash within each of us and of the challenge of striking a balance between extremes. The Lovers is also the card of dilemmas, like The Fool who stands at the crossroads, unable to make his choice.'),
  createTaro('The Moon', 18, 'img/themoon.png', 'In her light, what was once far away and difficult to grasp becomes sharp and clear. \n The Moon reminds us that reality is not always what it seems at first glance. In a world of appearances and illusions, the best course is often charted by one\'s own intuition. The Moon is also the card of dreams, desires, and of course, sleep – Death\'s nightly ritual.'),
  createTaro('The Star', 17, 'img/thestar.png', 'You will have to overcome unknown desires and sever a strong tie with something I can\'t quite make out. \n The Star is the card of hope. In the darkest of nights there is a light that shines the path to home. The Star is inspiration, motivation and gives us strength to move forward.'),
  createTaro('The Sun', 19, 'img/thesun.png', 'You\'ll meet some obstacles, but they will be temporary - so long as you follow your own judgement, stick to your chosen path. \n The Sun symbolizes success. It is a card of freedom, renewal and a bright future that lies ahead. The Sun also represents truth, for its light will always pull back the curtain of shadow that hides the world\'s secrets. It is also represents greatness and splendor.'),
  createTaro('The Tower', 16, 'img/thetower.png', 'You and everyone around you will experience a great shock. When The Tower falls, nothing will be the same again. \n The Tower is an omen of radical change, chaos and destruction. The lightning striking The Tower signifies a return to the old order that lies buried under the ruins, and a new order that will rise from it. It is a symbol of tragedy, apocalypse and self-destruction.'),
  createTaro('The Wheel Of Fortune', 10, 'img/thewheeloffortune.png', 'The danger is greater than you think. It will come suddenly, without warning. Conflict is unavoidable. \n The Wheel of Fortune means that change is coming. One\'s destiny could turn out for the better or the worse, yet it is also bears the promise of new possibilities. The Wheel reminds us that nobody remains at the top forever, but also that not every situation is hopeless.'),
  createTaro('The World', 21, 'img/theworld.png', 'You stand at the beginning of your journey. It will be nothing like you think, and longer than you imagine. \n The World lies at the end of The Fool\'s long and winding journey. Wiser and more world-weary than he started out, the Fool faces a moment of reckoning. Some of us accept where our journey has led us to, while others embark on a new challenge. One thing in this World is certain – you can\'t have it all.'),
]


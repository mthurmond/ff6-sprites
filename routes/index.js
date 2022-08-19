var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FF6 sprites' });
});

const characterData = {
	terra: {
		name: 'Terra Branford',
		intro: 'An unknown magic wielding girl searching for love',
		details: 'Terra was born to Maduin, an esper, and Madeline, a human. When the Gestahlian Empire raided the Esper World and abducted Maduin, he and Madeline were accidentally cast out with Terra. Emperor Gestahl took Terra, intrigued by the prospect of a half-esper. Terra was raised in Vector as a living weapon and experiment and was used to help the Empire develope Magitek.'
	},
  edgar: {
		name: 'Edgar Figaro',
		intro: 'A young desert king with a talent for machines',
		details: 'Edgar is the king of Figaro Castle and the elder twin brother of Sabin Rene Figaro. As the ruler of Figaro, Edgar leads the most technologically advanced civilization in the world outside of the Gestahlian Empire. He is a master engineer who creates unusual weapons as a hobby. He also feigns loyalty to the Empire, but is secretly backing the Returners, a resistance group. With the war between the Empire and the Returners intensifying after the discovery of a frozen esper in Narshe, Edgar turns on the Empire and openly works with the Returners to free the world from their control.'
	},
  kefka: {
		name: 'Kefka Palazzo',
		intro: 'An ambitous sorceror second in command to the emperor',
		details: 'Kefka Palazzo is the court mage of the Gestahlian Empire. He was their first experimental Magitek Knight, giving him the ability to use magic. However, the process was not yet perfected and the infusion damaged his mind, transforming him into a maniacal harlequin with an unquenchable thirst for blood. Chaotic and unpredictable in his drive to cause destruction, Kefka eventually (spoiler alert) turned on Emperor Gestahl and seized control of the Warring Triad to become the god of magic.'
	}
};

router.get('/:character', function(req, res, next) {
  const character = req.params.character
  const imageUrl = '/images/' + character + '.jpg'
  const characterName = characterData[character].name
  const characterIntro = characterData[character].intro
  const characterDetails = characterData[character].details
  res.render('character', { image: imageUrl, name: characterName, intro: characterIntro, details: characterDetails });
});

module.exports = router;

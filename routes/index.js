var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const characterData = require('./character-data.js');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'FF6 sprites' });
});

router.get('/:character', function (req, res, next) {
	const character = req.params.character
	const imageUrl = '/images/' + character + '.jpg'
	const audioUrl = '/audio/' + character + '.mp3'

	function getDialogueSummary(character) {
		const dialogueFilePath = path.join(process.cwd(), 'public', 'dialogue', `${character}.json`);
		console.log('dialogueFilePath', dialogueFilePath)
		if (fs.existsSync(dialogueFilePath)) {
			const speakingInfo = require(dialogueFilePath);
			const speakingTimes = speakingInfo.times;
			const speakingWords = speakingInfo.words;
			return { speakingTimes, speakingWords };
		} else {
			console.log(`File does not exist: ${dialogueFilePath}`);
			return {};
		}

	}
	const { speakingTimes = 'unknown', speakingWords = 'unknown' } = getDialogueSummary(character);

	const character_scene = { "columns": ["Scene", "Character", "Dialogue"], "index": [1737, 1739, 1738], "data": [[500.0, "Creature", "I am Gogo, master of the simulacrum... My miming skills will astonish you."], [500.0, "Gogo", "What an unusual tale...But I sense that you're trying to help make things right again. This should be fun. When do we leave?"], [500.0, "Gogo", "Yes...I have been idle for too long. If I deem you worthy, I'll mime your actions in battle. But first you must tell me what you're doing here."]] }

	scene_obj = character_scene["data"]
	let newobj = {}
	let newArray = []
	for (i in scene_obj) {
		// console.log(scene_obj[i][1])
		// console.log(scene_obj[i][2])
		newobj = {
			"char": scene_obj[i][1],
			"line": scene_obj[i][2]
		}
		newArray.push(newobj)
	}

	const characterName = characterData[character].name
	const characterIntro = characterData[character].intro
	const characterDetails = characterData[character].details
	res.render('character', { image: imageUrl, audio: audioUrl, name: characterName, intro: characterIntro, details: characterDetails, times: speakingTimes, words: speakingWords, scenes: newArray });
});

module.exports = router;
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
	const characterName = characterData[character].name
	const characterIntro = characterData[character].intro
	const characterDetails = characterData[character].details

	function getDialogueSummary(character) {
		const dialogueFilePath = path.join(process.cwd(), 'public', 'dialogue', `${character}.json`);
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

	function getSceneData(character) {
		const sceneFilePath = path.join(process.cwd(), 'public', 'dialogue', `${character}-scene.json`);
		console.log('sceneFilePath', sceneFilePath)
		if (fs.existsSync(sceneFilePath)) {
			const sceneInfo = require(sceneFilePath);
			scene_obj = sceneInfo["data"]
			let newobj = {}
			let newArray = []
			for (i in scene_obj) {
				newobj = {
					"char": scene_obj[i][1],
					"line": scene_obj[i][2]
				}
				newArray.push(newobj)
			}
			return newArray;
		} else {
			console.log(`File does not exist: ${sceneFilePath}`);
			return null;
		}

	}
	const newArray = getSceneData(character);

	res.render('character', { image: imageUrl, audio: audioUrl, name: characterName, intro: characterIntro, details: characterDetails, times: speakingTimes, words: speakingWords, scenes: newArray });
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FF6 sprites' });
});

const characterData = {
	banon: {
		name: 'Banon',
		intro: 'The leader of the returners',
		details: 'The returners are battling the empire and losing, yet Banon hopes to turn the tide. He is concerned Terra killed fifty Imperial soldiers, but ultimately agrees to have her join, and even coaxes Terra to see her magical abilities as a gift, not a curse. He\'s quick to remind others of the near-destruction of the world during the War of the Magi and fears that the Gestahlian Empire\'s pursuit of Magitek power will result in history repeating itself. Instead of using Magitek machinery to combat the Empire, Banon believes the best course is to get the aid of the espers directly, and believes the war can be brought to an end swiftly if they can earn their trust.'
	},	
	celes: {
		name: 'Celes Chere',
		intro: 'A magitek knight forged by the Empire',
		details: 'Celes was raised in the Gestahlian Empire and turned into a Magitek Knight. She rose through the ranks to become a general. However, she becomes disillusioned with the Empire and turns traitor, joining the Returners and forming a friendship with Locke. In the World of Ruin, she takes on the primary role of finding her friends and bringing them back together to strike back at Kefka and free the world from his rule.'
	},	
	chupon: {
		name: 'Chupon',
		intro: 'A strange and powerful villan',
		details: 'Chupon is a beast of a warrior and a close friend of Ultros, the giant villan octopus. He only attacks the party a few times, but when he does, he packs a mean punch. He also fights in the colloseum when valulable items are at stake and sneezes opponents away.'
	},	
	cid: {
		name: 'Cid',
		intro: 'Celeste\'s mentor',
		details: 'Cid raised Celeste as if she were his daughter and they both worked for the emperor together. Cid was close to, but not quite, in the inner circle of Emperor Gesthal. He helped him extract magic from espers and invented Magitek, a broad technological category that includes powerful weapons and armor.'
	},
	cyan: {
		name: 'Cyan Garamonde',
		intro: 'A noble warrior from a foreign land',
		details: 'Cyan is a Samurai of the kingdom of Doma, a nation with a long history and proud traditions. He\'s deeply devoted to his wife Elayne and son Owain. Despite fighting fiercely against the Empire, Cyan is unable to save Doma after Kefka poisones their water supply. Cyan\'s guilt and grief over the loss of his homeland and his family is at the core of his character and drives him to fight the emperor and make peace with his lost family.'
	},	
	edgar: {
		name: 'Edgar Figaro',
		intro: 'A young desert king with a talent for machines',
		details: 'Edgar is the king of Figaro Castle and the elder twin brother of Sabin Rene Figaro. As the ruler of Figaro, Edgar leads the most technologically advanced civilization in the world outside of the Gestahlian Empire. He is a master engineer who creates unusual weapons as a hobby. He also feigns loyalty to the Empire, but is secretly backing the Returners, a resistance group. With the war between the Empire and the Returners intensifying after the discovery of a frozen esper in Narshe, Edgar turns on the Empire and openly works with the Returners to free the world from their control.'
	},
	gau: {
		name: 'Gau',
		intro: 'A youth draped in monster hides',
		details: 'Gau is a feral child who grew up on the Veldt, learning to mimic the behavior of monsters. Sabin and Cyan earn his trust he becomes an unlikely ally of the Returners. During childbirth Gau\'s mother died and his father went mad with grief. He believed Gau was a demon and abandoned him. Gau\'s father later convinced himself it was all a dream and he never had a wife or son. Gau is driven to reunite with his father and perhaps, the citizens of Mobliz where he was born.'
	},	
	gesthal: {
		name: 'Emperor Gesthal',
		intro: 'A powerful world ruler seeking magic',
		details: 'Gesthal has been on a multi-decade quest to unearth magic for himself and his army so he can take more and more territory. Kefka and Leo are in his inner circle, but he should be more careful when selecting friends.'
	},	
	gogo: {
		name: 'Gogo',
		intro: 'A man shrouded in strange clothing',
		details: 'Little is know about Gogo. He is found in the belly of a Zone Eater dressed in odd clothes and could be a man or women. He surprisingly joins the party and is a mime, able to mimic the actions of his friends.'
	},	 
	interceptor: {
		name: 'Interceptor',
		intro: 'Shadow\'s loyal sidekick',
		details: 'Interceptor is Shadow\'s powerful doberman who blocks attacks and has a soft spot for children. He has the courage to rush into a burning home to save Relm, but otherwise adults should tread softly around this powerful K-9 and his ninja owner.'
	},	
	kefka: {
		name: 'Kefka Palazzo',
		intro: 'An ambitous sorceror second in command to the emperor',
		details: 'Kefka Palazzo is the court mage of the Gestahlian Empire. He was their first experimental Magitek Knight, giving him the ability to use magic. However, the process was not yet perfected and the infusion damaged his mind, transforming him into a maniacal harlequin with an unquenchable thirst for blood. Chaotic and unpredictable in his drive to cause destruction, Kefka eventually (spoiler alert) turned on Emperor Gestahl and seized control of the Warring Triad to become the god of magic.'
	},
	leo: {
		name: 'Leo Cristophe',
		intro: 'A soldier, diplomat, and the emperor\'s top general',
		details: 'Leo is the top general of the Gestahlian Empire and one of the emperor\'s most trusted men. He\'s a man of honor and prefers to settle conflicts with diplomacy rather than bloodshed. These attitudes earn him respect on both sides of the war and he\'s particularly loathed by Kefka.'
	},	 
	locke: {
		name: 'Locke Cole',
		intro: 'A treasure hunter and trail-worn traveler',
		details: 'Locke is an adventurer and thief who insists he\'s actually a "treasure hunter". He\'s a primary member of the Returners, the resistance group opposing the Gestahlian Empire, and acts as a spy, saboteur, and scout for them. Haunted by past regret from failing to protect a lover, Locke vigorously defends all women and is the character who rescues Terra from the city guard and smuggles her out of Narshe. Later, when sent to infiltrate the occupied South Figaro, Locke meets an Imperial general turned traitor, Celes, and the two slowly form a friendship that turns into mutually romantic affection.'
	},	 
	madeline: {
		name: 'Madeline',
		intro: 'A woman love-struck for an esper',
		details: 'Madeline was sick of living in the human world saying "It\'s nothing but a vortex of greed and hate." She meets and falls in love with Maduin, an esper, and the two bear a child: Terra. When the Gestahlian Empire raided the Esper World and abducted Maduin, he and Madeline were accidentally cast out with Terra. Emperor Gestahl took Terra, intrigued by the prospect of a half-esper. Terra was raised in Vector as a living weapon and experiment and was used to help the Empire develope Magitek.'
	},
	maduin: {
		name: 'Maduin',
		intro: 'An esper who falls in love with a human',
		details: 'Maduin is one of the higher-ranking espers in their society. He finds a human girl named Madeline who crossed into the esper realm, falls in love with her, and they conceive a child named Terra. Maduin ultimately helps the party fight the empire by giving them his magic powers.'
	},	 
	mog: {
		name: 'Mog',
		intro: 'A moogle who can summon the earth\'s power',
		details: 'Mog is a unique moogle that can speak the words of men. He can summon power through his dances. He\'s from Narshe and lives there when the party finds him. He learned how to speak from the esper Ramuh, who came to Mog in his dreams and told him to help the party. Mog is also a close friend with Umaro, and recruits him to join the party.'
	},	 
	relm: {
		name: 'Relm Arrowny',
		intro: 'In her pictures she captures everything',
		details: 'Relm is an artist. In her paintings she captures all: forests, water, light...the very essence of the thing. She is young but talented, from the mysterious town of Thamasa. She\'s Strago\'s adopted granddaughter and, as a descendant of the Magi herslef, can naturally channel magic. She can sketch monsters, bring them to life, and use their attacks.'
	},	 
	sabin: {
		name: 'Sabin Figaro',
		intro: 'A warrier who traded his throne for freedom',
		details: 'Sabin is King Edgar\'s twin brother. He traded the throne for his own freedom. He became a martial arts student under master Duncan and mastered his Blitz techniques. Ten years after he left Figaro, Sabin reunites with Edgar during the Third Gestahlian Campaign and joins the Returners to fight the empire alongside his estranged brother.'
	},	 
	setzer: {
		name: 'Setzer Gabbiani',
		intro: 'A gambling vagabond who finds freedom aboard his airship',
		details: 'Setzer is a world-wandering Gambler who operates a casino aboard his private airship, the Blackjack. Though Setzer is initially a neutral party during the Third Gestahlian Campaign, the Returners trick him into helping them reach the Imperial capital Vector, and he throws his lot in with them against the Gestahlian Empire. Over the course of the game he becomes a genuine friend and ally of the group and works with them to free the world from Kefka.'
	},	 
	shadow: {
		name: 'Shadow',
		intro: 'A mercenary who swears allegiance to no one',
		details: 'Shadow comes and goes like the wind, has no allegiance, and is hidden behind his stone gaze. He travels the world with his only companion, his dog Interceptor. He\'ll work for anyone for the right price and then departs as quick as he came. Shadow\'s past remains a mystery but some comes to life through his dreams.'
	},	 
	strago: {
		name: 'Strago Magus',
		intro: 'An elderly gentleman with a surprising skill',
		details: 'Strago has spent his whole life pursuing the secrets of monsters. He is Relm\'s surrogate grandfather and a resident of Thamasa. As a descendant of the Magi, Strago is one of a handful of humans who possess natural magic, manifested as the Lore command that allows him to use Blue Magic.'
	},	 
	terra: {
		name: 'Terra Branford',
		intro: 'An unknown magic wielding girl searching for love',
		details: 'Terra was born to Maduin, an esper, and Madeline, a human. When the Gestahlian Empire raided the Esper World and abducted Maduin, he and Madeline were accidentally cast out with Terra. Emperor Gestahl took Terra, intrigued by the prospect of a half-esper. Terra was raised in Vector as a living weapon and experiment and was used to help the Empire develope Magitek.'
	},
	umaro: {
		name: 'Umaro',
		intro: 'A yeti with a love for bone carvings',
		details: 'Umaro is a mysterious character who\'s stronger than a gigas, though a bit unruly. He lives deep in the Narshe Mines, and his only friends are the moogles. He joines the party in the World of Ruin and can only be coaxed into cooperation by Mog.'
	},
	ultros: {
		name: 'Ultros',
		intro: 'An aggressive and mysterious Octopus',
		details: 'Ultros comes out of nowhere to thwart the party\'s efforts. His origins are a mystery and he always comes packing  heat, with tentacles flying, and escapes before he can be vanquished entirely. He likes to crack jokes and come up with interesting schemes.'
	},
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

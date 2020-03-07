var Question_list = [
	'Give a natural explanation medieval people had for illness and disease.',
	'Give a supernatural explanation medieval people had for illness and disease.', 
	'Which Ancient Greek doctor created the theory of the four humours?',
	'Which Greek/Roman doctor developed the theory of the four humours further with his theory of opposites?',
	'List the four humours.',
	'What religious organisation believed that Hippocrates’ and Galen’s ides were the absolute truth?',
	'Why were some of Galen’s ideas about the human anatomy incorrect?',
	'What is the Hippocratic Oath that doctors still make today?',
	'List five people you could go to for medical advice and/or treatment.',
	'For how many years did physicians (doctors) train at university?',
	'What ‘training’ did physicians receive at university?',
	'What was an apothecary?',
	'Why was prayer a major treatment of illness and disease?',
	'Why did many doctors use astrology to diagnose and treat illness?',
	'What treatment would someone who apparently had too much blood receive?',
	'What treatment would someone who apparently had too much yellow bile receive? ',
	'What was the miasma theory?',
	'Why did the Christian Church believe it was good to care for the sick?',
	'Why didn’t the Christian Church try to ‘cure’ illness?',
	'How did monks help to preserve medical knowledge from the ancient world after the collapse of the Roman Empire?',
	'How many ‘hospitals’ did the Christian Church set up in England between 1000 and 1500?',
	'What ‘treatment’ would you receive in a Christian hospital?',
	'Whose ideas were taught in universities?',
	'Why did the Church arrest the 13th century monk, Roger Bacon?',
	'How was medical knowledge such as the four humours and the theory of opposites kept alive after the fall of the Roman Empire?',
	'Why was Islamic medicine generally more rational and evidence-based than European medicine?',
	
	];
var answer2list =[
	'Miasma (bad air) or Four humours out of balance',
	'Punishment from God or Demons/witches or Evil spirits or Astrology',
	'Hippocrates',
	'Galen',
	'Blood, phlegm, yellow bile and black bile',
	'The Christian Church',
	'His ideas were based mainly from his dissection of animals.',
	'A promise that they will follow certain rules when treating patients, such as "do no harm".',
	'Barber surgeons, Wise men/women, Travelling healers, Herbalists in monasteries, Trained doctors, an Apothecary',
	'7',
	'Read ancient texts like those of Hippocrates and Galen, Read writings from the Islamic world and Very little, if any, practical experience',
	'A person who prepared and sold remedies such as herbals',
	'People thought disease was a punishment from God.',
	'People believed that the position of the stars and planets had an effect on the human body.',
	'Blood letting',
	'Purging by being given an enema or laxative',
	'The belief that the bad air causes disease when someone breathes it in',
	'They followed the example of Jesus who healed the sick.',
	'They believed God sent illness as a punishment, so curing an illness would challenge God’s will',
	'Copied out ancient medical texts and kept them in their monasteries',
	'700',
	'Patients would receive food, water and a warm place to stay, Not given a ‘cure’, They were looked after by nuns, monks and priests, not doctors',
	'Hippocrates and Galen', 
	'He suggested that doctors should do original research and not trust old books',
	'By Islamic doctors',
	'Partly due to their knowledge of classical texts such the work of Hippocrates and Galen'
	
]
	
var answer_list = [
{
	anslist: answer2list},
	
	{
		anslist: [
	'God, The alignment of the stars',
	'Miasma (bad air), four humours out of balance',
	'Galen',
	'Hippocrates',
	'Spit, Sick, Juice and Brain fluid',
	'Islam',
	'He was blind!',
	'A promise that they will follow certain rules such as "do not kill anyone else".',
	'A teacher, a parent, your friend, any responsible adult, a carer',
	'2',
	'Practice on dead bodies.',
	'A person who carried out surgery.',
	'1',
	'1',
	'1',
	'1',
	'1',
	'1',
	'1',
	'1',
	'1',
	'1',
	'1',
	'1',
	'1',
	'1'

	]},
	
	{
	anslist: [
	'Germs',
	'Werewolves',
	'Pythagoras',
	'Julius Caesar',
	'Dark, Light, Toilet and Cool',
	'Jews',
	'Writing hadnt been invented yet',
	'An ancient greek recipe for bread.',
	'A pharmacist, a local GP, a paediatrician, a dentist, a wise friend. ',
	'6',
	'An apprenticeship with an experienced doctor.',
	'A person who carried out surgery.',
	'2',
	'2',
	'2',
	'2',
	'2',
	'2',
	'2',
	'2',
	'2',
	'2',
	'2',
	'2',
	'2',
	'2'

	]},

	
	{ 
		anslist: [
	'A plant invasion',
	'Angry spirits',
	'Jesus',
	'The Pope',
	'Happy, Sad, Angry, Disgusted',
	'Hindus',
	'He dissected only deformed humans',
	'An agreement to go to Hippocrates grave one day.',
	'Google, Bing, your Insta DMs, an online poll, yourself.',
	'As many as they liked',
	'Watching 24 hours in A&E on repeat',
	'A person who sold only fake medicines',
	'3',
	'3',
	'3',
	'3',
	'3',
	'3',
	'3',
	'3',
	'3',
	'3',
	'3',
	'3',
	'3',
	'3'

	]},
]
	
var qnumber = 0;
var quest = Question_list[qnumber];
var ans = answer2list[qnumber];
var ans_position = 0;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
		array[j] = temp;
	}
}

function showq() {
			qnumber = Math.floor(Math.random() * Question_list.length);
			document.getElementById('Question').innerHTML = Question_list[qnumber];
			shuffleArray(answer_list);
			document.getElementById('1').innerHTML = answer_list[0].anslist[qnumber];
			document.getElementById('2').innerHTML = answer_list[1].anslist[qnumber];
			document.getElementById('3').innerHTML = answer_list[2].anslist[qnumber];
			document.getElementById('4').innerHTML = answer_list[3].anslist[qnumber];
			document.getElementById('1').style.background = '#CCF6FF';
			document.getElementById('2').style.background ='#CCF6FF';
			document.getElementById('3').style.background = '#CCF6FF';
			document.getElementById('4').style.background = '#CCF6FF';
			
			}
			
function showa1() {
	if (answer2list[qnumber] == document.getElementById('1').innerHTML){
		document.getElementById('1').style.background = '#7fff78';
	}else {
		document.getElementById('1').style.background = '#ff8282';
	}
	
		}
function showa2() {
	if (answer2list[qnumber] == document.getElementById('2').innerHTML){
		document.getElementById('2').style.background = '#7fff78';
	}else{
		document.getElementById('2').style.background = '#ff8282';
	}
	
		}
function showa3() {
	if (answer2list[qnumber] == document.getElementById('3').innerHTML){
		document.getElementById('3').style.background = '#7fff78';
	}else{
		document.getElementById('3').style.background = '#ff8282';
	}
	
}
function showa4() {
	if (answer2list[qnumber] == document.getElementById('4').innerHTML){
		document.getElementById('4').style.background = '#7fff78';
	}else{
		document.getElementById('4').style.background = '#ff8282';
	}
	
		}

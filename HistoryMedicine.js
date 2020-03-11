var Question_list = [
	];
var answer2list =[
]
	
var answer_list = [
{},
{},
	{}
	]
	
var qnumber = 0;
var quest = Question_list[qnumber];
var ans = answer2list[qnumber];
var ans_position = 0;
var correct_count = 0;
var ans_count = 0;
var quest_count = -1;
var percentcorrect = 0;
var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var clicked4 = false;
var iscorrect = false;

function initiate() {
 Question_list = [
	'Which two ancient doctors dominated mecical thinking for over a millenium?',
	'When was Louis Pasteurs "Germ Theory" published?',
	'What was the first magic bullet for?',
	'When was smallpox eradicated globally?',
	'Which century was Vesalius from?',
	'Which century was Paré from?',
	"Who wrote 'Fabric of the Human Body' in 1543? ",
	"Which century was John Hunter from?",
	'When was the smallpox vaccination made mandatory in England?',
	'What did William Harvey prove?',
	'Which centuries was William Harvey from?',
	"When did the 'Black Death' start in Britain?",
	"Why were Hugh of Lucca and his son Theodore's ideas not very popular?",
	'Which of the following were used as natural anaesthetics?',
	'Which century was John of Arderne from?',
	'Which Islamic surgeon wrote a book describing amputations, removal of bladder stones and stitching wounds?',
	];
 answer2list =[
	'Hippocrates and Galen',
	'1861',
	'Syphilis',
	'1980',
	'C16th',
	'C16th',
	"Vesalius",
	'C18th',
	'1853',
	'Blood circulates around the body and humans have a fixed amount of blood.',
	'C16th and 17th',
	'1348',
	'They clashed with the ideas of Hippocrates and Galen, which was criticised by the church.',
	'[All of these]',
	'C14th',
	'Abulcasis',
]
	
 answer_list = [
	{
		anslist: answer2list
	},
	
	{
		anslist: [
		'Hippocrates and Caesar',
		'1799',
		'Tuberculosis',
		'1798',
		'C15th',
		'C15th',
		'Paré',
		'C16th',
		'1861',
		'The jawbone has only one part, not two like Galen said.',
		'C17th and 18th',
		'1665',
		'They clashed with the ideas of the Caliphs who were in charge.',
		'Mandrake root',
		'C12th',
		'Ibn al-Nafis',
	]},
	
	{
	anslist: [
		'Pasteur and Koch',
		'1848',
		'Cholera',
		'1861',
		'C17th',
		'C17th',
		'Harvey',
		'C15th',
		'1771',
		'Germs are the cause for disease and come from the air.',
		'C15th and 16th',
		'1495',
		'They were proven wrong.',
		'Opium',
		'C17th',
		'Al-Rhazi',
	]},

	
	{ 
	anslist: [
		'Koch and Archimedes',
		'1851',
		'Smallpox',
		'1896',
		'C18th',
		'C18th',
		'Galen',
		'C17th',
		'1834',
		'Pouring boiling oil into a wound is not good in general.',
		'C14th and 15th',
		'1522',
		'They used wine on wounds - what a waste!',
		'Hemlock and Henbane',
		'C13th',
		'Ibn Sina',
	]},
]
	
qnumber = 0;
quest = Question_list[qnumber];
ans = answer2list[qnumber];
ans_position = 0;
correct_count = 0;
ans_count = 0;
quest_count = -1;
percentcorrect = 0;
	
	
	
}





function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
		array[j] = temp;
	}
}

function start() {
	initiate();
	showq();
	
}

function showq() {
	if (Question_list.length >= 1) {
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
			clicked1 = false;
			clicked2 = false;
			clicked3 = false;
			clicked4 = false;
			ans_count = 0;
			iscorrect = false;
			quest_count++;
			percentcorrect = Math.floor((correct_count/quest_count)*100);
			if (quest_count == 0) {
				document.getElementById('percent').innerHTML = '0% correct :(';
			}else {
				document.getElementById('percent').innerHTML = percentcorrect + '% correct :)';}
	}else{
		document.getElementById('Question').innerHTML = 'Well done. You finished with ' + percentcorrect + '% right! Click here to start again.';
		document.getElementById('1').innerHTML = '';
		document.getElementById('2').innerHTML = '';
		document.getElementById('3').innerHTML = '';
		document.getElementById('4').innerHTML = '';
		document.getElementById('1').style.background = '#CCF6FF';
		document.getElementById('2').style.background ='#CCF6FF';
		document.getElementById('3').style.background = '#CCF6FF';
		document.getElementById('4').style.background = '#CCF6FF';
		clicked1 = false;
		clicked2 = false;
		clicked3 = false;
		clicked4 = false;
		iscorrect = false;
	}
			
}

function nextq() {
	if (ans_count == -1) {
		Question_list.splice(qnumber,1);
		answer_list[0].anslist.splice(qnumber,1);
		answer_list[1].anslist.splice(qnumber,1);
		answer_list[2].anslist.splice(qnumber,1);
		answer_list[3].anslist.splice(qnumber,1);
		correct_count++;
		showq();
	}
	else {
		showq();
	}
}

function showa1() {if (clicked1 == false && iscorrect == false) {
	if (answer2list[qnumber] == document.getElementById('1').innerHTML){
		document.getElementById('1').style.background = '#7fff78';
		ans_count--;
		clicked1 = true;
		iscorrect = true;
	}else {
		document.getElementById('1').style.background = '#ff8282';
		ans_count++;
		clicked1 = true;
	}
}else {
}
		}
function showa2() {if (clicked2 ==false && iscorrect == false) {
	if (answer2list[qnumber] == document.getElementById('2').innerHTML){
		document.getElementById('2').style.background = '#7fff78';
		ans_count--;
		clicked2 = true;
		iscorrect = true;
	}else{
		document.getElementById('2').style.background = '#ff8282';
		ans_count++;
		clicked2 = true;
		
	}
}else {
}
		}
		
function showa3() {if (clicked3 == false && iscorrect == false) { 
	if (answer2list[qnumber] == document.getElementById('3').innerHTML){
		document.getElementById('3').style.background = '#7fff78';
		ans_count--;
		clicked3 = true;
		iscorrect = true;
	}else{
		document.getElementById('3').style.background = '#ff8282';
		ans_count++;
		clicked3 = true;
	}
}else{}
}
function showa4() {if (clicked4 == false && iscorrect == false) {
	if (answer2list[qnumber] == document.getElementById('4').innerHTML){
		document.getElementById('4').style.background = '#7fff78';
		ans_count--;
		clicked4 = true;
		iscorrect = true;
	}else{
		document.getElementById('4').style.background = '#ff8282';
		ans_count++;
		clicked4 = true;
	}
}else {}
		}

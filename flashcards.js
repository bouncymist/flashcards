var Question_list = [
	'Who created the theory of 4 humours?',
	'Who came after Hippocrates?', 
	'What did Ibn Sina write?',
	'Give a natural explanation medieval people had for illness.',
	'Which Islamic surgeon wrote a book describing amputations, bladder stone removal, etc. ?',
	'Which wars brought Islamic medical knowledge to Europeans?',
	'Who did al-Nafis criticise?',
	];
var Answer_list = [
	'Hippocrates',
	'Galen',
	'Canon of Medicine',
	'Four Humours or Miasma Theory',
	'Abulcasis',
	'The Crusades',
	'Galen',
	];
var qnumber = 0;
var quest = Question_list[qnumber];
var ans = Answer_list[qnumber];
function showq() {
			qnumber = Math.floor(Math.random() * Question_list.length);
			document.getElementById('Question').innerHTML = Question_list[qnumber];
			document.getElementById('Answer').innerHTML = 'Click here for answer';
			}
function showa() {
	document.getElementById('Answer').innerHTML = Answer_list[qnumber];
	
		}
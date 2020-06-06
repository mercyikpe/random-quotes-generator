let quotes = [
	{
		quote: "I'm not sure if I was the first man in space or the last dog.",
		author: "-Yuri Gagarin",
	},
	{
		quote: "'We’ll never survive!' 'Nonsense. You’re only saying that because no one ever has.'",
		author: "-William Goldman",
	},
	{
		quote: "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
		author: "-Bill Watterson",
	},
	{
		quote: "You people talk about the living and the dead as if they were two mutually exclusive categories. As if you cannot have a river that is also a road, or a song that is also a color.",
		author: "-Neil Gaiman",
	},
	{
		quote:"Yet man will never be perfect until he learns to create and destroy; he does know how to destroy, and that is half the battle.",
		author: "-Alexandre Dumas",
	},
	{
		quote:"Never let your sense of morals prevent you from doing what is right.",
		author: "-Isaac Asimov",
	},
	{
		quote: "Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.",
		author: "-Douglas Adams",
	},
	{
		quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
		author: "-Ayn Rand",
	},
	{
		quote: "I'm not dumb. I just have a command of thoroughly useless information.",
		author: "-Bill Watterson",
	},
	{
		quote:"A bone to the dog is not charity. Charity is the bone shared with the dog, when you are just as hungry as the dog.",
		author:"-Jack London",
	},
];

//variables
const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// event listener
btn.addEventListener('click', getQuote);

function getQuote () {
	let number = Math.floor(Math.random() * quotes.length);

	quote.innerHTML = '<span>"</span>' + quotes[number].quote + '<span>"</span>';
	author.innerHTML = '<span>--</span>' + quotes[number].author;
}

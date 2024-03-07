
const heading = document.querySelector("h1");
heading.textContent = "Freelancer Forum"

// create an array of freelancers
const freelancers = [
  { name: "Rachel", price: 30, occupation: " gardener" },
  { name: "Christina H", price: 45, occupation: "travel agent" },
  { name: "Christina L", price: 60, occupation: "vet" },
  { name: "Kaya", price: 45, occupation: "programmer" },
  { name: "Jennifer", price: 100, occupation: "nurse" },
  { name: "Angelina", price: 50, occupation: "makeup artist" },
  { name: "Vic", price: 40, occupation: "social worker" },
  { name: "Annie", price: 85, occupation: "physician's assistant" },
  { name: "Madeline", price: 55, occupation: "security" },
  { name: "Diana", price: 150, occupation: "racer" },
  { name: "Aspen", price: 50, occupation: "hunter" },
  { name: "Birch", price: 25, occupation: "toy enthusiast" },
  { name: "Chai", price: 30, occupation: "treat tester" },
];

// render the initial freelancer data
function render() {
  const freelancerlist = document.querySelector("#freelancer-list");
  freelancerlist.innerHTML = " ",
}

// create a function to generate a new random freelancer
// call the function in an interval

// create a function to calculate the average starting price of your freelancers' array
// call function to update displayed message

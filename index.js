const heading = document.querySelector("h1"); // selects the first <h1> element in HTML using document.querySelector(). returns reference to the selected element which is stored in the variable "heading"
heading.textContent = "Freelancer Forum";
heading.style.display = "block";
heading.style.margin = "0 auto";
heading.style.textAlign = "center";

// create an array of freelancers
const freelancers = [
  { name: "Christina H", price: 45, occupation: "travel agent" },
  { name: "Christina L", price: 60, occupation: "gardener" },
  { name: "Kaya", price: 45, occupation: "programmer" },
  { name: "Jennifer", price: 100, occupation: "nurse" },
  { name: "Angelina", price: 50, occupation: "makeup artist" },
  { name: "Vic", price: 40, occupation: "social worker" },
  { name: "Annie", price: 85, occupation: "physician's assistant" },
  { name: "Diana", price: 150, occupation: "racer" },
];

// render the initial freelancer data
function render() {
  const freelancerlist = document.querySelector("#freelancer-list");
  freelancerlist.innerHTML = " "; //clears the existing content inside freelancerlist by setting innerHTML to an empty string
  freelancers.forEach((freelancer) => {
    const listfreelancer = document.createElement("li");
    listfreelancer.textContent = `${freelancer.name} - ${freelancer.occupation}: $${freelancer.price}`;
    freelancerlist.appendChild(listfreelancer);
  });
  updateAveragePrice();
}

render();

// create a function to generate a new random freelancer
function generateRandomFreelancer() {
  //create an array of occupations
  const occupations = [
    "gardener",
    "travel agent",
    "programmer",
    "nurse",
    "makeup artist",
    "social worker",
    "physician's assistant",
    "racer",
  ];
  // generate random occupations
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  //generate a random price between 25 and 200
  const randomPrice = Math.floor(Math.random() * 150) + 50;

  //generate a new freelancer
  const newnames = [
    "Rachel",
    "Madeline",
    "Theresa",
    "Lucy",
    "Tim",
    "Mitchell",
    "Cam",
    "Phil",
    "Gloria",
    "Claire",
    "Haley",
    "Alex",
    "Luke",
    "Jay",
    "Manny",
  ];

  function generateRandomName() {
    const randomIndex = Math.floor(Math.random() * newnames.length);
    return newnames[randomIndex];
  }

  const newFreelancer = {
    name: generateRandomName(),
    price: randomPrice,
    occupation: randomOccupation,
  };

  freelancers.push(newFreelancer);

  console.log(newFreelancer);

  render();
}

// call the function in an interval
setInterval(generateRandomFreelancer, 1000);

// create a function to calculate the average starting price of your freelancers' array
function calculateAveragePrice() {
  const totalPrice = freelancers.reduce(
    (total, freelancer) => total + freelancer.price,
    0
  );
  const averagePrice = totalPrice / freelancers.length;
  return averagePrice;
}

// create a function to update the average price of your freelancers' array
function updateAveragePrice() {
  const averagePriceDisplayed = document.querySelector("#average-price");
  const averagePrice = calculateAveragePrice();
  averagePriceDisplayed.textContent = `Average Starting Price: $${averagePrice.toFixed(
    2
  )}`;
}

// call function to update displayed message
updateAveragePrice();

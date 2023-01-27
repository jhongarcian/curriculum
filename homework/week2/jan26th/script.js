// Exercise of Months 

const months = [
  {
    monthNumber: 1,
    abbreviation: "Jan",
    name: "January",
    daysCount: 31,
  },
  {
    monthNumber: 2,
    abbreviation: "Feb",
    name: "February",
    daysCount: 28,
  },
  {
    monthNumber: 3,
    abbreviation: "Mar",
    name: "March",
    daysCount: 31,
  },
  {
    monthNumber: 4,
    abbreviation: "Apr",
    name: "April",
    daysCount: 30,
  },
  {
    monthNumber: 5,
    abbreviation: "May",
    name: "May",
    daysCount: 31,
  },
  {
    monthNumber: 6,
    abbreviation: "Jun",
    name: "June",
    daysCount: 30,
  },
  {
    monthNumber: 7,
    abbreviation: "Jul",
    name: "July",
    daysCount: 31,
  },
  {
    monthNumber: 8,
    abbreviation: "Aug",
    name: "August",
    daysCount: 31,
  },
  {
    monthNumber: 9,
    abbreviation: "Sep",
    name: "September",
    daysCount: 30,
  },
  {
    monthNumber: 10,
    abbreviation: "Oct",
    name: "October",
    daysCount: 31,
  },
  {
    monthNumber: 11,
    abbreviation: "Nov",
    name: "November",
    daysCount: 30,
  },
  {
    monthNumber: 12,
    abbreviation: "Dec",
    name: "December",
    daysCount: 31,
  },
];

// the number of days in September
console.log(months[8].daysCount);
// the abbreviation for February
console.log(months[1].abbreviation);
// what the name of the fourth month is
console.log(months[3].name);

// Finances excercise with a plus of Javascript cloning a template instead of hard coding in the html
// using the concept of array, object, nodeClone, HTML learned on the class, Some css styles.

const list = document.querySelector("#list");
const template = document.querySelector("#transation-list-template");

const transactions = [
  {
    vendorName: "Govindas",
    amount: 25,
    category: "Dining",
  },
  {
    vendorName: "Boba Tea",
    amount: 12,
    category: "Dining",
  },
  {
    vendorName: "Digital Craft",
    amount: 1000,
    category: "School",
  },
  {
    vendorName: "Xfinity",
    amount: 56,
    category: "Bill",
  },
  {
    vendorName: "Macy's",
    amount: 60,
    category: "Clothing",
  },
  {
    vendorName: "MacBook Air",
    amount: 1200,
    category: "Apple.inc",
  },
  {
    vendorName: "Soccer",
    amount: 20,
    category: "Entreteniment",
  },
];


    // functions that loop through each item in the array
function setupTransactions() {
  transactions.map(renderTransactions);
}

function renderTransactions(transaction) {
    // Clonning the template
  const templateClone = template.content.cloneNode(true);

    // Name of the Vendor Name 
  const vendorNames = templateClone.querySelector("[data-vendor-name]");
  vendorNames.innerText = transaction.vendorName;
    // Amount of the Transaction
  const vendorAmount = templateClone.querySelector("[data-amount]");
  vendorAmount.innerText = `$ ${transaction.amount}`;
    // Category of the transaction
  const vendorCategory = templateClone.querySelector("[data-category]");
  vendorCategory.innerText = transaction.category;

  list.appendChild(templateClone);
}

setupTransactions();

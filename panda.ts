// =========================
// Case Study 1: Employees Performance
// =========================
type Employee = {
  id: number;
  name: string;
  department: string;
  salary: number;
  rating: number;
};

const employees: Employee[] = [
  { id: 1, name: "Alice", department: "Engineering", salary: 9000, rating: 5 },
  { id: 2, name: "Bob", department: "HR", salary: 7000, rating: 3 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 8500, rating: 4 },
  { id: 4, name: "Diana", department: "Sales", salary: 6000, rating: 5 },
  { id: 5, name: "Ethan", department: "Engineering", salary: 10000, rating: 2 },
];

// a
const namesUppercase = employees.map(e => e.name.toUpperCase());
// b
const highSalaryRating = employees.filter(e => e.salary > 8000 && e.rating >= 4);
// c
const firstEngineerRating5 = employees.find(e => e.department === "Engineering" && e.rating === 5);

console.log("Case 1a:", namesUppercase);
console.log("Case 1b:", highSalaryRating);
console.log("Case 1c:", firstEngineerRating5);

// =========================
// Case Study 2: Library Books
// =========================
type Book = {
  isbn: number;
  title: string;
  author: string;
  year: number;
  available: boolean;
};

const books: Book[] = [
  { isbn: 111, title: "1984", author: "George Orwell", year: 1949, available: true },
  { isbn: 222, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, available: false },
  { isbn: 333, title: "Sapiens", author: "Yuval N. Harari", year: 2011, available: true },
  { isbn: 444, title: "Animal Farm", author: "George Orwell", year: 1945, available: true },
  { isbn: 555, title: "Harry Potter", author: "J.K. Rowling", year: 1997, available: false },
];

// a
const serialTitles = books.map(b => b.year < 2000 ? `${b.title} (Serial)` : b.title);
// b
const availableOrwell = books.filter(b => b.author === "George Orwell" && b.available);
// c
const firstUnavailable = books.find(b => !b.available);

console.log("Case 2a:", serialTitles);
console.log("Case 2b:", availableOrwell);
console.log("Case 2c:", firstUnavailable);

// =========================
// Case Study 3: Online Courses
// =========================
type Course = {
  id: number;
  title: string;
  category: string;
  students: number;
  rating: number;
};

const courses: Course[] = [
  { id: 1, title: "JavaScript Mastery", category: "Programming", students: 6000, rating: 4.8 },
  { id: 2, title: "UI/UX Basics", category: "Design", students: 2000, rating: 4.2 },
  { id: 3, title: "React Advanced", category: "Programming", students: 4500, rating: 4.6 },
  { id: 4, title: "Digital Marketing", category: "Marketing", students: 3500, rating: 4.0 },
  { id: 5, title: "TypeScript Complete", category: "Programming", students: 2500, rating: 4.9 },
];

// a
const titleWithRating = courses.map(c => `${c.title} (${c.rating})`);
// b
const programmingHighRated = courses.filter(c => c.category === "Programming" && c.rating >= 4.5);
// c
const firstManyStudents = courses.find(c => c.students > 5000);

console.log("Case 3a:", titleWithRating);
console.log("Case 3b:", programmingHighRated);
console.log("Case 3c:", firstManyStudents);

// =========================
// Case Study 4: Flight Tickets
// =========================
type Flight = {
  id: number;
  airline: string;
  destination: string;
  price: number;
  available: boolean;
};

const flights: Flight[] = [
  { id: 1, airline: "AirAsia", destination: "Bangkok", price: 300, available: true },
  { id: 2, airline: "Japan Airlines", destination: "Tokyo", price: 1200, available: true },
  { id: 3, airline: "Garuda", destination: "Jakarta", price: 450, available: false },
  { id: 4, airline: "Singapore Airlines", destination: "Singapore", price: 350, available: true },
  { id: 5, airline: "ANA", destination: "Tokyo", price: 800, available: true },
];

// a
const flightMap = flights.map(f => `${f.airline} - ${f.destination} ($${f.price})`);
// b
const cheapAvailableFlights = flights.filter(f => f.price < 500 && f.available);
// c
const firstTokyoFlight = flights.find(f => f.destination === "Tokyo");

console.log("Case 4a:", flightMap);
console.log("Case 4b:", cheapAvailableFlights);
console.log("Case 4c:", firstTokyoFlight);

// =========================
// Case Study 5: E-Commerce Products
// =========================
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  discount: number; // percent
  inStock: boolean;
};

const products: Product[] = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1500, discount: 10, inStock: true },
  { id: 2, name: "Shoes", category: "Fashion", price: 80, discount: 20, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 900, discount: 15, inStock: false },
  { id: 4, name: "Book", category: "Education", price: 40, discount: 0, inStock: true },
  { id: 5, name: "Headphones", category: "Electronics", price: 200, discount: 5, inStock: true },
];

// a
const finalPrices = products.map(p => ({
  name: p.name,
  finalPrice: p.price - (p.price * p.discount / 100)
}));
// b
const filteredProducts = finalPrices.filter((p, i) => products[i]?.inStock && p.finalPrice > 100);
// c
const firstElectronics = products.find(p => p.category === "Electronics");

console.log("Case 5a:", finalPrices);
console.log("Case 5b:", filteredProducts);
console.log("Case 5c:", firstElectronics);
const data = await fetch('http://localhost:3000/pokemon').then(res => res.json());

console.log(data);
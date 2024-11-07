function Candidate(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.greet = () => console.log(`Hello, ${this.name}!`);
}
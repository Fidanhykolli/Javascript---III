class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  isSameAge(otherUser) {
    if (this.age > otherUser.age) {
      return true;
    } else {
      return false;
    }
  }
}

const fidan = new User("Fidan", "Hykolli", 23, "fidan@gmail.com");
console.log(fidan);

const student = new User("Mario", "Rossi", 30, "mario.rossi@gmail.com");
console.log(student);

if (fidan.isSameAge(student)) {
  console.log(`${fidan.firstName} is older ${student.firstName}`);
} else {
  console.log(`${fidan.firstName} is younger than ${student.firstName}`);
}

class Pets {
  constructor(_PetName, _OwnerName, _Species, _Breeds) {
    this.petName = _PetName;
    this.ownerName = _OwnerName;
    this.species = _Species;
    this.breeds = _Breeds;
  }

  hasSameOwner(otherOwner) {
    return this.ownerName === otherOwner.ownerName;
  }
}

const dog = new Pets("Fuffy", "Alberto", "American", "Labrador");
console.log(dog);
const cat = new Pets("Whiskers", "Sara", "Felis catus", "Siberian");
console.log(cat);

const sameOwner = dog.hasSameOwner(cat);
console.log("They have the same owner: ", sameOwner);

// ---------- Cards del form ------------

const namePet = document.getElementById("namePet");
const ownerPet = document.getElementById("ownerName");
const speciesPet = document.getElementById("species");
const breedsPet = document.getElementById("breeds");

const saveButton = document.querySelector("form button");

const petsSaved = [];
console.log();

const fillCards = function () {
  const row = document.getElementById("pets1");
  row.innerHTML = "";
  petsSaved.forEach((Pets) => {
    const newCards = document.createElement("div");
    newCards.classList.add("col");
    newCards.innerHTML = `
    
    
    <div class="card d-sm-block">
        <div class="card-body">
            <h5> Name: </h5> <ul> <li> ${Pets.petName} </li> </ul>
            <h5> Pet Owner: </h5> <ul> <li> ${Pets.ownerName} </li> </ul>
            <h5> Specie:  </h5><ul> <li> ${Pets.species} </li> </ul>
            <h5 class="mb-2 mt-2"> Breed </h5><ul> <li> ${Pets.breeds} </li> </ul>
        </div>
    </div>
    `;

    row.appendChild(newCards);
  });
  namePet.value = "";
  ownerPet.value = "";
  speciesPet.value = "";
  breedsPet.value = "";
};

const savedButton = document.querySelector("form button");

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  const newPet = new Pets(
    namePet.value,
    ownerPet.value,
    speciesPet.value,
    breedsPet.value
  );

  petsSaved.push(newPet);
  fillCards();
});

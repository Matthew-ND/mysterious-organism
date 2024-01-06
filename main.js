// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate: function  () {
      const findDna = Math.floor(Math.random() * 15);
      let removedDna = dna.splice(findDna, 1);

      let dnaBases = ['A', 'T', 'C', 'G'];
      let updatedDnaBases = dnaBases.filter(i => i != removedDna);

      let newDna = updatedDnaBases[Math.floor(Math.random() * 3)];
      return dna.splice(findDna, 0, newDna);
    },
    compareDNA: function (org) {
      let count = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === org.dna[i]) {
          count++;
        }
      }
      const similarPercent = (count / 15) * 100;
      console.log(`Specimen ${this.specimenNum} and Specimen ${org.specimenNum} have ${similarPercent.toFixed(2)}% DNA in common.`);
    },
    willLikelySurvive: function () {
      let count = 0;

      this.dna.forEach(i => {
        if (i === 'C' || i === 'G') {
          count++;
        }
      })

      const compare = (count / 15) * 100;
      if (compare < 60) {
        return false;
      } else {
        return true;
      }
      }
    }
  
}

const create30 = () => {
  let samples = [];
  for (let i = 1; i <= 30; i++) {
    samples.push(pAequorFactory(i, mockUpStrand()));
  }
  return samples;
}

const mySamples = create30();
console.log(mySamples);

/*
CHALLENGE
-Create a .complementStrand() method to the factory function’s object that returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa. (Check the hint for more details)
-Use the .compareDNA() to find the two most related instances of pAequor.

NOTES
4. 
-Randomly select a dnaBase and change it to one of the other 3
-Return updated array to dna

-Generate a random number to 15
-Select dna[random numver] > 

-array a t c g
-remove the item dna[randomnumber]
-pull from remaining list (splice())

5.
-New var = counter

-ForEach(i)

7. Generate 30 objects

-Function > 
-Array 1-30

DO... WHILE!?

*/





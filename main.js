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

    mutate() {
      const findDna = Math.floor(Math.random() * 15);
      let removedDna = dna.splice(findDna, 1);

      let dnaBases = ['A', 'T', 'C', 'G'];
      let updatedDnaBases = dnaBases.filter(i => i != removedDna);

      let newDna = updatedDnaBases[Math.floor(Math.random() * 3)];
      return dna.splice(findDna, 0, newDna);
    },

    compareDNA(org) {
      let count = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === org.dna[i]) {
          count++;
        }
      }
      const similarPercent = (count / 15) * 100;
      console.log(`Specimen ${this.specimenNum} and Specimen ${org.specimenNum} have ${similarPercent.toFixed(2)}% DNA in common.`);
    },

    willLikelySurvive() {
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
    },

    complementStrand() {
      let complementDna = [];
      this.dna.map(base => {
        switch(base){
          case 'A':
          complementDna.push('T');
          break;

          case 'T':
          complementDna.push('A');
          break;

          case 'C':
          complementDna.push('G');
          break;

          case 'G':
          complementDna.push('C');
          break;
        }
      })
      return complementDna;
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

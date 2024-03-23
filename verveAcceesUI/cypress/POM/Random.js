    let randNumber = ''
    let randText = ''
    let mailKey = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (let i = 0; i < 5; i++)
        randText+=mailKey.charAt(Math.floor(Math.random() * mailKey.length));
        randNumber+= (Math.floor(Math.random() * 100000));
    class RandomNumber {
        test = randText;
        number = randNumber;
        newtest='blue' + randText; 
        testname = 'cre' + randText + 'am';
        VIN = randText + randNumber;
        plateNumber = randNumber + randText;
        apartId = randText + randText + randNumber;
    }
    export default RandomNumber
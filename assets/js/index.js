const user1 = {
  fullName: "Testov Test Testovich",
  clientLevel: 'basic',
};

const user2 = {
  fullName: 'Nullov Null Nullovich',
  clientLevel: 'pro',
};

const user3 = {
  fullName: 'Nanov Nan Nanovich',
  clientLevel: 'platinum',
};

const user4 = {
  fullName: 'Userenko User Userovich',
  clientLevel: undefined,
};

const bank1 = {
  bankName: "Zashad",
  clientLevels: {
    basic: {
      discount: 0.1,
    },
    pro: {
      discount: 0.2,
    },
    platinum: {
      discount: 0.25,
    },
  },
};

const { clientLevels: { basic },
  clientLevels: { pro },
  clientLevels: { platinum } } = bank1;

const connectionLevels = new Map();
connectionLevels.set(user1.clientLevel, basic)
  .set(user2.clientLevel, pro)
  .set(user3.clientLevel, platinum)

const calculateTotalSum = (user, basicSum) => {
  let totalSum = 0;
  if (connectionLevels.has(user.clientLevel) && connectionLevels.get(user.clientLevel) != undefined ) {
    totalSum = basicSum - (basicSum * connectionLevels.get(user.clientLevel).discount);
    return totalSum;
  } else {
    return basicSum;
  }
}

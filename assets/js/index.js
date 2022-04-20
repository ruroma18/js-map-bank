const user1 = {
  fullName: "Testov Test Testovich",
  clientLevel: 'basic',
  availableMoney: 1000,
  bankName: 'Zashad',
};

const user2 = {
  fullName: 'Nullov Null Nullovich',
  clientLevel: 'silver',
  availableMoney: 5000,
  bankName: 'PrivetBank',
};

const user3 = {
  fullName: 'Nanov Nan Nanovich',
  clientLevel: 'middle',
  availableMoney: 10000,
  bankName: 'MiniBank',
};

const user4 = {
  fullName: 'Userenko User Userovich',
  clientLevel: undefined,
  availableMoney: 1000,
  bankName: 'NoNameBank',
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

const bank2 = {
  bankName: "PrivetBank",
  clientLevels: {
    bronze: {
      discount: 0.15,
    },
    silver: {
      discount: 0.17,
    },
    gold: {
      discount: 0.20,
    },
  },
};

const bank3 = {
  bankName: "MiniBank",
  clientLevels: {
    junior: {
      discount: 0.12,
    },
    middle: {
      discount: 0.19,
    },
    senior: {
      discount: 0.22,
    },
  },
};

const { clientLevels: { basic },
  clientLevels: { pro },
  clientLevels: { platinum } } = bank1;

const { clientLevels: { bronze },
  clientLevels: { silver },
  clientLevels: { gold } } = bank2;

const { clientLevels: { junior },
  clientLevels: { middle },
  clientLevels: { senior } } = bank3;


const connectionLevelsBank1 = new Map();
connectionLevelsBank1.set('basic', basic)
  .set('pro', pro)
  .set('platinum', platinum);

const connectionLevelsBank2 = new Map();
connectionLevelsBank2.set('bronze', bronze)
  .set('silver', silver)
  .set('gold', gold);

const connectionLevelsBank3 = new Map();
connectionLevelsBank3.set('junior', junior)
  .set('middle', middle)
  .set('senior', senior);



const connectionBankWithLevels = new Map();
connectionBankWithLevels.set('Zashad', connectionLevelsBank1)
  .set('PrivetBank', connectionLevelsBank2)
  .set('MiniBank', connectionLevelsBank3);



const calculateTotalSum = (user, basicSum) => {
  const userConnectionBankLevel = connectionBankWithLevels.get(user.bankName);
  if (userConnectionBankLevel.has(user.clientLevel) && userConnectionBankLevel.get(user.clientLevel) != undefined) {
    const totalSum = basicSum - (basicSum * userConnectionBankLevel.get(user.clientLevel).discount);
    user.availableMoney = user.availableMoney - totalSum;
    return totalSum;
  } else {
    user.availableMoney = user.availableMoney - basicSum;
    return basicSum;
  }
};

const checkBeforeCalculating = () => {
  if (connectionBankWithLevels.has(user.bankName)) {
    if (basicSum > user.availableMoney) {
      const lackSum = basicSum - user.availableMoney;
      throw new RangeError(`You lack ${lackSum} for purchase`);
    } else {
      calculateTotalSum(user, basicSum)
    };
  } else {
    throw new Error(`Bank doesn't exist!`);
  }
}





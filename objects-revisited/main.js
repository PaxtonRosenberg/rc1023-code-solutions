const business = {
  opens: '9:00 AM',
  closes: '5:00 PM',
  totalEmployees: '3',
  daysOpen: ['M', 'T', 'W', 'R', 'F'],
  employees: {
    paxton: {
      position: 'CEO',
      daysOfWeekWorking: ['M', 'T', 'W', 'R', 'F'],
    },
    david: {
      position: 'Operations Director',
      daysOfWeekWorking: ['T', 'W', 'R', 'F'],
    },
    sean: {
      position: 'Sales Director',
      daysOfWeekWorking: ['M', 'T', 'W', 'R'],
    },
  },
};

function addWeekends() {
  business.daysOpen.unshift('U');
  business.daysOpen.push('S');
  business.employees.paxton.daysOfWeekWorking.unshift('U');
  business.employees.paxton.daysOfWeekWorking.push('S');
  business.employees.david.daysOfWeekWorking.unshift('U');
  business.employees.david.daysOfWeekWorking.push('S');
  business.employees.sean.daysOfWeekWorking.unshift('U');
  business.employees.sean.daysOfWeekWorking.push('S');
}

addWeekends();
console.log('Days Opens:', business.daysOpen);
console.log('Paxton Schedule:', business.employees.paxton.daysOfWeekWorking);
console.log('David Schedule:', business.employees.david.daysOfWeekWorking);
console.log('Sean Schedule:', business.employees.sean.daysOfWeekWorking);

function addEmployees() {
  async function users() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    function randomSchedule() {
      const randomNumber = Math.floor(Math.random() * 5);
      let daysWorking = 0;
      if (randomNumber === 1) {
        daysWorking = ['U', 'M', 'S'];
      } else if (randomNumber === 2) {
        daysWorking = ['U', 'M', 'T', 'S'];
      } else if (randomNumber === 3) {
        daysWorking = ['U', 'M', 'T', 'W', 'S'];
      } else if (randomNumber === 4) {
        daysWorking = ['U', 'M', 'T', 'W', 'R', 'S'];
      } else if (randomNumber === 5) {
        daysWorking = ['U', 'M', 'T', 'W', 'R', 'F', 'S'];
      }
      return daysWorking;
    }

    business.employees.leanne = users[0];
    business.employees.leanne.position = 'District Sales Manager';
    business.employees.leanne.daysOfWeekWorking = randomSchedule();
    business.employees.leanne.fullTime =
      business.employees.leanne.daysOfWeekWorking.length >= 5;
    business.employees.ervin = users[1];
    business.employees.ervin.position = 'Controller';
    business.employees.ervin.daysOfWeekWorking = randomSchedule();
    business.employees.ervin.fullTime =
      business.employees.ervin.daysOfWeekWorking.length >= 5;
    business.employees.clemintine = users[2];
    business.employees.clemintine.position = 'Warehouse Manager';
    business.employees.clemintine.daysOfWeekWorking = randomSchedule();
    business.employees.clemintine.fullTime =
      business.employees.clemintine.daysOfWeekWorking.length >= 5;
    business.employees.patricia = users[3];
    business.employees.patricia.daysOfWeekWorking = randomSchedule();
    business.employees.patricia.fullTime =
      business.employees.patricia.daysOfWeekWorking.length >= 5;
    business.employees.patricia.position = 'Marketing Director';
  }
  users();
}

addEmployees();
console.log(business.employees);
console.log(business);

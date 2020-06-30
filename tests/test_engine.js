const TestCases = [];

global.describe = async (name, cb) => {
    TestCases.push({name, cb});
}

global.it = async (name, cb) => {
    try {
        await cb();
        console.log("+ "+name);
    } catch(e) {
        console.log("- "+name);
        console.error(e);
    }
}

global.expect = (data) => {
    return {
        equil: (compareTo) => {
            if (data !== compareTo){
                throw `${data} is expected to be equil to ${compareTo}`;
            }
        },
        have: (field) => {
            if (!data.hasOwnProperty(field)){
                throw `${data} is expected to have property ${field}`;
            }
        },
        greatThen: (number) => {
            if (data <= number){
                throw `${data} is expected to greater then ${number}`;
            }
        },
    }
}

async function describeRun(name, cb) {
    console.log('# ' + name);
    try {
        await cb();
    } catch(e) {
        console.error(e);
    }
}

function run() {
    TestCases.forEach(async ({name, cb}) => await describeRun(name, cb));
}

module.exports = {
    run,
}
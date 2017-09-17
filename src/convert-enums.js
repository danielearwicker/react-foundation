var fs = require('fs');

var src = fs.readFileSync('enums.ts', 'utf8');
var lines = src.split('\n');

let enumName = null;
const members = [];

for (const line of lines) {
    const parts = line.trim().split(' ');
    let comment = true, output = false;

    if (parts[1] === 'enum') {
        enumName = parts[2];
        members.length = 0;
    } else if (enumName && parts[1] === '=') {
        let val = parts[2];
        if (val.endsWith(',')) {
            val = val.substr(0, val.length - 1);
        }
        members.push( { key: parts[0], val } );
    } else if (enumName && line.trim() === '};') {
        output = true;
    } else {
        comment = false;
    }

    console.log((comment ? '// ' : '') + line);

    if (output) {
        console.log();
        console.log('export type ' + enumName + ' = ' + members.map(m => m.val).join('|') + ';');
        console.log();
        console.log('export const ' + enumName + ' = {');
        for (const member of members) {
            console.log('    ' + member.key + ': ' + member.val + ' as ' + enumName + ',');
        }
        console.log('};');
        enumName = '';
    }
}




/*

export enum Breakpoints {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'xlarge',
  XXLARGE = 'xxlarge'
};

export type Breakpoints = 'small'|'medium'|'large'|'xlarge'|'xxlarge';

export const Breakpoints = {
  SMALL: 'small' as Breakpoints,
  MEDIUM: 'medium' as Breakpoints,
  LARGE: 'large' as Breakpoints,
  XLARGE: 'xlarge' as Breakpoints,
  XXLARGE: 'xxlarge' as Breakpoints
};

*/
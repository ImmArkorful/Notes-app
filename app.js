const chalk = require('chalk'); 
const yargs = require('yargs');
const fs = require('fs');
const notes = require('./notes.js');

/* yargs.command({
    command:'body',
    describe: 'Use this to add a  body to the list',
    builder: {
        body:{
            describe : 'Note body',
            demandOption: true,
            type : 'string' 
        }
    },
    handler:function(argv){
        console.log('Body: '+argv.body);
    }
})

yargs.parse();
 */ 
yargs.version('1.1.0');


yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption:true,
            type : 'string'
        },
        body:{
            describe : 'Note body',
            demandOption: true,
            type : 'string' 
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command : 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
    }
    },
    handler(argv){
       notes.removeNotes(argv.title);
    }
})

yargs.command ({
    command : 'list',
    describe : 'List the notes',
    handler() {
        notes.listNotes();
    }
})

yargs.command ({
    command : 'read',
    describe : 'Reads all the notes',
    builder: {
        title:{
            describe:'Note title',
            demandOption:true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
})
yargs.parse();
 
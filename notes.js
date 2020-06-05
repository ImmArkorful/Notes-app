const fs = require('fs');
const chalk= require('chalk');



const readNotes =(title) =>{
    notes = loadNotes();
    
    reqNote = notes.find((note) =>note.title===title);
    
    if(reqNote)
    {
        console.log(chalk.bold.white.inverse(reqNote.title) , ':', reqNote.body)
    } else{
        console.log(chalk.red('No note found'));
    }
}


const addNote = (title,body) =>{
    const notes = loadNotes();
    // const duplicateNotes =notes.filter((note) =>note.title === title); 
    const duplicateNote = notes.find((note) => note.title === title);
    
    debugger


    if(!duplicateNote){
        notes.push({
            title: title,
            body:body
        })
    
        saveNotes(notes);
        console.log(chalk.blue.inverse('New note added'));
    }
    else{
        console.log(chalk.red.inverse('Note title taken'));
    }
    
}

const saveNotes =(notes) => {
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = () => {
    try{
    const dataBuffer =fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
    
    
}
const newLoad = () => {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
}
const newSave = (notes) => {
    const finalData = JSON.stringify(notes);
    fs.writeFileSync("notes.json",finalData);
}
const removeNotes = (title) => {
    const notes = newLoad();
    
    const correctNotes = notes.filter((note) => note.title !==title);
    // console.log(correctNotes);
    if(correctNotes.length !== notes.length )
        {
            console.log(chalk.blue.inverse('Note removed'))
            newSave(correctNotes);
        }
        else
        {console.log(chalk.red.inverse('No note found'))}
        
    }
const listNotes =() => {
    const notes = loadNotes();
    console.log(chalk.white.inverse('Your Notes'));
    notes.forEach((note) => {
        console.log(note.title);
    } );

}


module.exports = { 
    addNote : addNote,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}
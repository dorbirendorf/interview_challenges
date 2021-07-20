class NotesStore {
    constructor(){
        this.notes=[]
    }
   
    checkState(state){
        if((state!='completed' && state!='active' &&state!='others')){
            throw new Error(`Invalid state ${state}`)
        }  
    }
    
    checkName(name){
        if (name==''){
        throw new Error(`Name cannot be empty`) 
        }      
    }
    
    addNote(state,name){
        this.checkState(state)
        this.checkName(name)
        this.notes.push({name,state})
    }
    getNotes(state){
        this.checkState(state)
        return this.notes.filter((note)=>note.state==state).map(note=>note.name)
    }
    
}

mynotes=new NotesStore()
mynotes.addNote('active','note1')
mynotes.addNote('active','note2')
mynotes.addNote('completed','note3')


console.log(mynotes.getNotes('active'))
console.log(mynotes.getNotes('completed'))
console.log(mynotes.getNotes('blabla'))


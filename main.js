class UniqueArray {
    constructor(){
        this.data = []
        this.added = {}
    }

    add(item){
       
        if(!this.exists(item)){
            this.data.push(item)
            added[item] = true
        }
    }

    showAll(){
        this.data.forEach(d => console.log(d))
    }

    exists(item){
        if(added[item]){
            return true
        }
        else{
            return false
        }
        
    }

    get(index){
        if(this.data[index]){
            return this.data[index]
        }
        else{
            return -1
        }
    }

}
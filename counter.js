function Counter() {
    return {
        count: 0,
        increment(){ 
            this.count++;
            this.display()
           
        },
        reset() { 
            this.count = 0;
            this.display();
        },
        display() { 
            document.getElementById("d-text").innerHTML = this.count
            //console.log(document.getElementById("d-text").innerHTML)
        },
       
    }
   
}
counter=new Counter()

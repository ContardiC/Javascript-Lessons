var user = {
    firstName : 'Mario',
    lastName : 'Rossi',
    YOB : 2000,
    age : function(){
        return Date().getFullYear() - this.YOB;
    }
} 
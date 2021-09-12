class User{

    constructor(name,role){
        this.name=name;
        this.role=role
    }

    #userList = ["jack sparrow","Iron Man", "Thanos"];


    getUserInfo(){
        return {name:this.name,role:this.role}
    }


     getUserList(){
        return this.#userList;
    }
}

module.exports = User;
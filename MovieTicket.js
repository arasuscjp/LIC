class MovieTicket{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    movieList=[];

    getMovieInfo(){
        return {name:this.name, price:this.price}
    }

    ticketBooking(movieName){
        this.movieList.push(movieName)
    }

    getTicketList(){
        return this.movieList;
    }
}
    module.exports=MovieTicket;


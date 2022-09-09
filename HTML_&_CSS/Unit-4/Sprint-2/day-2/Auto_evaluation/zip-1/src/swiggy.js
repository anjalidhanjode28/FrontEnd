function UserInfo(n,l) {
    this.name=n
    this.location=l
}

function serveFood(food) {
    return `Serving ${food} to ${this.name} in ${this.location}`;
}

function serveIn(n,l,food) {

    let new_userInfo = new UserInfo(n,l)
    return serveFood.call(new_userInfo,n,l,food);
}

function billNote(total) {
    return `${this.name}'s bill is INR ${total}"`
}

function generateInVoice(n, l, quantity, price) {

   let new_userInfo = new UserInfo(n,l);

   return billNote.apply(new_userInfo,[quantity*price]);
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };

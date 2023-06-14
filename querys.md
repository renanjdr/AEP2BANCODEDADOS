db.users.find({
    firstName: ""
})

db.users.find({
    gender: "male"

})

db.users.find({
    email: /unicesumar/
},{ firstName: 1, secondName: 1, email: 1 ,heigth: 1, weight: 1, gender: 1
})

db.users.aggregate([{
    $group: {
        _id: null,
        averageWeight: { $avg: "$weight" }
    }
}])
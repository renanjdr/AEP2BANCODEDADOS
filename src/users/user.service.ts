import UserModel from "./user.schema"
import UserType from "./types/user.type"

class UserService{
    public async create(user: UserType){
        const createdUser = await UserModel.create(user)
        return createdUser
    }

    public async createMany(userList: Array<UserType>){
        const createdUsers = await UserModel.insertMany(userList)
        return createdUsers
    }

    public async findMale(){
        const maleUsers = await UserModel.find({ "gender": "male"})
        return maleUsers
    }

    public async findByName(name: String){
        const user = await UserModel.find({ "firstName": name }, { "firstName": 1, "secondName": 1, "email": 1 ,"heigth": 1, "weight": 1, "gender": 1})
        return user
    }

    //média de peso
    public async avgWeight() {
        const userQnt = await UserModel.aggregate([{
            $group: {
              _id: null,
              averageWeight: { $avg: "$weight" }
            }
          }])
        return userQnt
    }

    public async findUnicesumar(){
        const unicesumarUsers = await UserModel.find({ "email": /unicesumar/ }, { "firstName": 1, "secondName": 1, "email": 1 ,"heigth": 1, "weight": 1, "gender": 1})
        return unicesumarUsers
    }

    async update(id: any, dataToUpdate: UserType) {
        const updatedUser = await UserModel.findOneAndUpdate({_id: id}, {
            firstName: dataToUpdate.firstName,
            secondName: dataToUpdate.secondName,
            email: dataToUpdate.email,  
            heigth: dataToUpdate.heigth,
            weight: dataToUpdate.weight,
            gender: dataToUpdate.gender
        }, {new: true})

        return updatedUser
    }

    async delete(id: any) {
        await UserModel.findOneAndDelete({_id: id})
        return
    }
}




export default new UserService()
import app from "./app"


function main(){
    try {
        app.listen(3000, "localhost",async () => {
            console.log("Server runing on port 3000")
        })
    } catch (error) {
        console.log(error)
    }
}

main()
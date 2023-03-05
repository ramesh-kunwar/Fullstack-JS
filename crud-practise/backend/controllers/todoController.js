exports.home = (req, res) =>{
    res.status(200).send("Hello express app")
}

exports.getTasks =  async (req, res)=>{
    try {
     const {taskName, taskStatus} = req.body;
     if (!taskName) {
         res.send("Task Name is required.")
     }
 
    } catch (error) {
     
    }
 }
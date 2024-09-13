
const Users = require('../model/User_schema.js');
const Usercontroller = async (request, response) => {
    try {

        // const exist = await Users.findOne({ username: request.body.username });

        // if (exist) {
        //     return respond.status(401).json({ message: "username already exist" });
        // }
        const userdata = request.body;
        const newuser = new Users(userdata);
        await newuser.save();
        response.status(200).json({ message: userdata });
    }
    catch (err) {
        console.log('Error while Controlling', err);
    }

}

const userlogin = async (request, response) => {
    try {


        const username = request.body.username;
        const passward = request.body.passward;

        let user = await Users.findOne({ username: username, passward: passward });
        if (user) {
            return response.status(200).json({ data: user });
        } else {
            return response.status(401).json('invalid login');
        }

    }
    catch (err) {
        return response.status(501).json(err);
    }

}
module.exports = {
    Usercontroller: Usercontroller,
    userlogin: userlogin
};

const user=require("./Userssq");

exports.getAllUsers=async()=>{
    return await User.findAll({
        attributes:[
            "user_id",
            "user_name",
            "email",
            "role",
            "created_at"
        ]
    });
};



const User = require("../model/user");

exports.getAllUser = async (req, res) => {
  try {
    let query;

    const { ...reqQuery } = req.query;
    //   console.log('hello');
    const removeFields = ["select", "sort"];
    removeFields.forEach((param) => {
      delete reqQuery[param];
    });

    // console.log(query, 'json ');

    let queryStr = JSON.stringify(reqQuery);
    console.log(queryStr, "query string");

    // SELECT Fields
    if (req.query.select) {
      const fields = req.query.select.split(",").join(" ");

      query = query.select(fields);
    }

    // console.log(req.query.select);
    const user = await User.find();

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

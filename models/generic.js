const mongoose = require("mongoose");

const objectSchema = new mongoose.Schema(
  { any: {} },
  {
    strict: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    versionKey: false,
  }
);

const genericData = mongoose.model("genericData", objectSchema);

module.exports = genericData;

// function createModel(req) {
//   const collection = req.params.collection;
//   config.DEBUG &&
//     console.log("Create DbModel Request :", collection, req.params);

//   return mongoose.model(
//     collection || req.__mongoose_model,
//     objectSchema,
//     req.__mongoose_collection
//   );
// }

// export const createOne = async (req, res) => {
//   console.log("createOne Request :", req.body);

//   const DbModel = createModel(req);
//   const dbResponse = await DbModel.create(req.body);
//   if (!dbResponse) {
//     return res.dbError(req.body);
//   } else {
//     return res.inserted(dbResponse);
//   }
// };

// export const getByQuery = async (req, res) => {
//   console.log("getByQuery queryString: ", req.query.filter);

//   let queryObject;
//   if (req.query.filter) {
//     queryObject = JSON.parse(req.query.filter);
//   }
//   console.log("getByQuery query: ", queryObject);
//   const DbModel = createModel(req);

//   let query = DbModel.find(queryObject);

//   if (req.query.sort) {
//     const sort = JSON.parse(req.query.sort);
//     query = query.sort(sort);
//   }
//   if (req.query.start || req.query.start === 0) {
//     const start = _toNumber(req.query.start);
//     query = query.skip(start);
//   }
//   if (req.query.end) {
//     const end = _toNumber(req.query.end);
//     query = query.limit(end);
//   }

//   const filtered = await query.exec();
//   if (req.body.sort) return query;
//   else return res.queried(filtered);
// };

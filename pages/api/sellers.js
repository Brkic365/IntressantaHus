import Seller from "../../models/Seller";
import connectDB from "../../lib/connectDB";

// Connect to the database
connectDB();

export default async function handler(req, res) {
  if (req.method === "GET") {
    let sellers = await Seller.find({});

    return res.status(200).json(sellers);
  } else if (req.method === "POST") {
    const { name, pfp } = req.body;
    // Create the new seller object
    const newSeller = await new Seller({
      name: name.toString(),
      pfp: pfp.toString(),
    }).save();

    // Return 200 if everything is successful
    return res.status(200).send("OK");
  } else {
    return res.status(405).json({ message: "Unsupported request method" });
  }
}

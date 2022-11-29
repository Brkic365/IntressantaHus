import Seller from "../../models/Seller";
import DataDocument from "../../models/DataDocument";
import connectDB from "../../lib/connectDB";

// Connect to the database
connectDB();

export default async function handler(req, res) {
  if (req.method === "GET") {
    let object = {
      tilverkasNu: {},
      koksvecka: {},
      forsaljning: {},
      senastSalt: {},
    };

    object.tilverkasNu = await DataDocument.findOne({ id: "tilverkasNu" });
    object.koksvecka = await DataDocument.findOne({ id: "koksvecka" });
    object.forsaljning = await DataDocument.findOne({ id: "forsaljning" });
    object.senastSalt = await DataDocument.findOne({ id: "senastSalt" });

    // Get the Senast Salt seller
    object.senastSalt.info.seller = await Seller.findById(
      object.senastSalt.info.seller
    );

    // Get the Forsaljning sellers
    let sellersArr = [];
    let sellersObj = object.forsaljning.info.sellers;

    Object.keys(object.forsaljning.info.sellers).forEach(async function (
      key,
      index
    ) {
      // Get the seller using the index
      let seller = await Seller.findById(key);

      // Push everything to an array
      sellersArr.push({
        ...seller.toObject(),
        sales: sellersObj[key],
      });
    });

    object.forsaljning.info.sellers = sellersArr;

    // Get the Koksvecka denna vecka sellers
    let dennaVeckaSellers = object.koksvecka.info.dennaVeckaSellers;

    object.koksvecka.info.dennaVeckaSellers = await Promise.all(
      dennaVeckaSellers.map(async (_seller) => {
        let sellerObj = await Seller.findById(_seller);
        return sellerObj;
      })
    );

    // Get the Koksvecka nasta vecka sellers
    let nastaVeckaSellers = object.koksvecka.info.nastaVeckaSellers;

    object.koksvecka.info.nastaVeckaSellers = await Promise.all(
      nastaVeckaSellers.map(async (_seller) => {
        let sellerObj = await Seller.findById(_seller);
        return sellerObj;
      })
    );

    return res.status(200).json(object);
  } else if (req.method === "POST") {
    const { id, info } = req.body;

    await DataDocument.updateOne({ id }, { $set: { info } }, { upsert: true });

    // Return 200 if everything is successful
    return res.status(200).send("OK");
  } else {
    return res.status(405).json({ message: "Unsupported request method" });
  }
}

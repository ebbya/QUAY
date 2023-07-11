import prisma from '/lib/prisma';

export default async function handler(req, res) {
  const { kaj, deleteID } = req.body;
  console.log(kaj);
  console.log(deleteID);

  try {
    let placement = null;
    switch (kaj) {
      case "Stavsnas":
        placement = await prisma.StavsnasKajplacering.findUnique({
          where: {
            placeringID: Number(deleteID),
          },
        });
        break;
      case "Vaxholm":
        placement = await prisma.VaxholmKajplacering.findUnique({
          where: {
            placeringID: Number(deleteID),
          },
        });
        break;
      case "Stromkajen":
        placement = await prisma.StromkajenKajplacering.findUnique({
          where: {
            placeringID: Number(deleteID),
          },
        });
        break;
    }

    if (!placement) {
      throw new Error(`Placement with ID ${deleteID} not found.`);
    }

    // Delete the placement
    switch (kaj) {
        case "Stavsnas":
            await prisma.StavsnasKajplacering.delete({
                where: {
                  placeringID: Number(deleteID),
                }
            })
        case "Vaxholm":
            await prisma.VaxholmKajplacering.delete({
                where: {
                  placeringID: Number(deleteID),
                }
            })
        case "Stromkajen":
            await prisma.StromkajenKajplacering.delete({
                where: {
                  placeringID: Number(deleteID),
                }
            })
    }

    res.json({ message: 'Placement deleted successfully.', error: null });
  } catch (error) {
    console.error('Error:', error); // Log the error
    res.json({ error: error.message, message: null });
  }
}

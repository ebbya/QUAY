import prisma from '/lib/prisma';

export default async function handler(req, res) {
  const {kaj, kajplats, fartyg, ankomst, avgang} = req.body;

  console.log(req.body);
  console.log(kaj);

  try {
    let newPlacering = null; 
    switch (kaj) {
      case "Stavsnas":
        newPlacering = await prisma.StavsnasKajplacering.create({
          data: {
            kajplats,
            fartyg,
            ankomst: new Date(ankomst), // Convert string to Date object
            avgang: new Date(avgang), // Convert string to Date object
          },
        });
        break;
      case "Stromkajen":
        newPlacering = await prisma.StromkajenKajplacering.create({
          data: {
            kajplats,
            fartyg,
            ankomst: new Date(ankomst), // Convert string to Date object
            avgang: new Date(avgang), // Convert string to Date object
          },
        });
        break;
      case "Vaxholm":
        newPlacering = await prisma.VaxholmKajplacering.create({
          data: {
            kajplats,
            fartyg,
            ankomst: new Date(ankomst), // Convert string to Date object
            avgang: new Date(avgang), // Convert string to Date object
          },
        });
        break;
      default:
        throw new Error(`Invalid "kaj" value: ${kaj}`);
    }

    res.json({ placering: newPlacering, error: null });
  } catch (error) {
    console.error('Error:', error); // Log the error

    res.json({ error: error.message, placering: null });
  }
}

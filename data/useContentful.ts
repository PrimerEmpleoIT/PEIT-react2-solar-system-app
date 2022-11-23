import { createClient } from "contentful";
const useContentful = () => {
  const client = createClient({
    space: `${process.env.NEXT_PUBLIC_SPACE_CONTENTFUL}`,
    accessToken: `${process.env.NEXT_PUBLIC_APIKEY_CONTENTFUL}`,
    host: "cdn.contentful.com",
  });
  const getSolarSystem = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "solarSystem",
        select: "fields",
        order: "fields.id",
      });
      const sanitizedEntries = entries.items.map((item: any) => {
        return { ...item.fields };
      });
      return sanitizedEntries;
    } catch (err) {
      console.log("Error en contenful", err);
    }
  };
  return { getSolarSystem };
};
export default useContentful;

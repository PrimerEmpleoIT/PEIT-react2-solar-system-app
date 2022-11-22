import { createClient } from "contentful";
const useContentful = () => {
  const client = createClient({
    space: `pkn4w8tbsfj6`,
    accessToken: `v_vruSodEn5MVeFZOtDnunnRR9NAgMXLdIikcfm2wAU`,
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

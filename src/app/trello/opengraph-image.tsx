import Image from "../opengraph-image";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";
export const alt = `${siteConfig.gameName} Trello, Discord & Wiki Status`;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default Image;

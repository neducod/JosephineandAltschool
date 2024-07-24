import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Links = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, " ") as SelectedPage;
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-secondary-300" : ""
      } transition duration-500 hover:text-green-300`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
      }}
    >
      {page}
    </AnchorLink>
  );
};
export default Links;

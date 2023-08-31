import { CMS_NAME } from "../lib/constants";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import LanguageSwitch from "./LanguageSwitch";

const Intro = () => {
  const { t } = useTranslation(["common"]);
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        Life has no ctrl Z.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <Link href="/about" className="hover:underline">
          {t("About")}
        </Link>
      </h4>
      <LanguageSwitch />
    </section>
  );
};

export default Intro;

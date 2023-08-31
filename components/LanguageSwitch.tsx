import Link from "next/link";
import { useRouter } from "next/router";

const LanguageSwitch = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const nextLocale = router.locale === "en" ? "zh-TW" : "en";

  return (
    <Link locale={nextLocale} href={{ pathname, query }}>
      {router.locale === "en" ? "TW" : "EN"}
    </Link>
  );
};

export default LanguageSwitch;

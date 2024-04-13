import Link from "next/link";
import { useRouter } from "next/router";

const LanguageSwitch = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const nextLocale = router.locale === "zh-TW" ? "en" : "zh-TW";

  return (
    <Link locale={nextLocale} href={{ pathname, query }}>
      {router.locale === "zh-TW" ? "EN" : "TW"}
    </Link>
  );
};

export default LanguageSwitch;

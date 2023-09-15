import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import logoImg from "@/assets/images/logo.png";
import bubbleImg from "@/assets/images/bubble.png";
import flagENImg from "@/assets/images/flag-en.png";
import flagESImg from "@/assets/images/flag-cl.png";
import { useTranslation } from "react-i18next";
export const Header = () => {
    const { t, i18n } = useTranslation("home");

    const switchLanguaje = () => {
        i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
    };
    return (
        <Flex justify={"space-between"}>
            <Image src={logoImg} h="10" />
            <HStack spacing={3}>
                <Image src={bubbleImg} h="10" />
                <Link
                    href="mailto:fabianluque2014@gmail.com?subject=Contacting you from your portfolio"
                    fontSize={"lg"}
                    fontWeight={"bold"}
                >
                    {t("hireMe")}
                </Link>
                <Image
                    onClick={switchLanguaje}
                    pl={20}
                    src={i18n.language === "en" ? flagENImg : flagESImg}
                    h="8"
                    cursor="pointer"
                />
            </HStack>
        </Flex>
    );
};

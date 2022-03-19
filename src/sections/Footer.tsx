import { HStack, Text, VStack } from "@chakra-ui/react";
import { FooterLink } from "components";
import { socialLinks } from "config/social";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <VStack
      position="relative"
      bottom={0}
      width="100%"
      paddingTop="10rem"
      paddingBottom="2rem"
      spacing={7}
    >
      <HStack spacing={5}>
        {socialLinks.map(({ alt, icon, href }, i) => (
          <FooterLink
            key={i.toString()}
            alt={alt}
            icon={icon.footer}
            href={href}
          />
        ))}
      </HStack>
      <Text>&copy; {getYearRange()} Rajit Banerjee</Text>
    </VStack>
  );
};

const getYearRange = (): string => {
  const start = 2021;
  const curr = new Date().getFullYear();
  return curr === start ? curr.toString() : `${start}-${curr}`;
};

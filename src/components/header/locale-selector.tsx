import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

function LocaleSelector() {
  return (
    <Select>
      <SelectTrigger className="border-none outline-none bg-transparent">
        <SelectValue placeholder="EN" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="EN">EN</SelectItem>
          <SelectItem value="RU">RU</SelectItem>
          <SelectItem value="KG">KG</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LocaleSelector;

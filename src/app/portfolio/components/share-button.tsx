"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

interface ShareButtonProps {
  url: string;
}

export function ShareButton({ url }: ShareButtonProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Compartilhar perfil</Button>
      </PopoverTrigger>
      <PopoverContent className="flex items-center justify-around gap-2 flex-wrap max-w-[160px]">
        <WhatsappShareButton url={url}>
          <WhatsappIcon round={true} size={25} />
        </WhatsappShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon round={true} size={25} />
        </LinkedinShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon round={true} size={25} />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon round={true} size={25} />
        </TwitterShareButton>
      </PopoverContent>
    </Popover>
  );
}

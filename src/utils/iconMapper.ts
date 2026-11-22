import {
  Flower2,
  BookOpen,
  FileText,
  CodeXml,
  Mail,
  House,
  User,
  Briefcase,
  GraduationCap,
  Star,
  Heart,
  Lightbulb,
  Rocket,
  Folder,
  Terminal,
  Link,
  MessageCircleCode,
  Phone,
  MessageSquare,
  Send,
  Pickaxe,
  Hammer,
  Wrench,
  FolderCode,
} from "@lucide/astro";

// Social media icon components
import GitHub from "../components/icons/GitHub.astro";
import LinkedIn from "../components/icons/LinkedIn.astro";
import Twitter from "../components/icons/Twitter.astro";
import Bluesky from "../components/icons/Bluesky.astro";
import Instagram from "../components/icons/Instagram.astro";
import YouTube from "../components/icons/YouTube.astro";
import Facebook from "../components/icons/Facebook.astro";
import Line from "../components/icons/Line.astro";
import StackShare from "../components/icons/StackShare.astro";
import Orcid from "../components/icons/Orcid.astro";
import ResearchGate from "../components/icons/ResearchGate.astro";
import DevHub from "../components/icons/DevHub.astro";
import Blockdit from "../components/icons/Blockdit.astro";

export type IconName =
  | "Flower2"
  | "BookOpen"
  | "FileText"
  | "CodeXml"
  | "Mail"
  | "Home"
  | "User"
  | "Briefcase"
  | "GraduationCap"
  | "Star"
  | "Heart"
  | "Lightbulb"
  | "Rocket"
  | "Folder"
  | "Terminal"
  | "Link"
  | "MessageCircleCode"
  | "Phone"
  | "MessageSquare"
  | "Send"
  | "Pickaxe"
  | "Hammer"
  | "Wrench"
  | "FolderCode"
  | "GitHub"
  | "LinkedIn"
  | "Twitter"
  | "Bluesky"
  | "Instagram"
  | "YouTube"
  | "Facebook"
  | "Line"
  | "StackShare"
  | "Orcid"
  | "ResearchGate"
  | "DevHub"
  | "Blockdit"
  | "Email";

export const iconMap: Record<IconName, any> = {
  Flower2,
  BookOpen,
  FileText,
  CodeXml,
  Mail,
  Home: House,
  User,
  Briefcase,
  GraduationCap,
  Star,
  Heart,
  Lightbulb,
  Rocket,
  Folder,
  Terminal,
  Link,
  MessageCircleCode,
  Phone,
  MessageSquare,
  Send,
  Pickaxe,
  Hammer,
  Wrench,
  FolderCode,
  GitHub,
  LinkedIn,
  Twitter,
  Bluesky,
  Instagram,
  YouTube,
  Email: Mail,
  Facebook,
  Line,
  StackShare,
  Orcid,
  ResearchGate,
  DevHub,
  Blockdit,
};

export function getIcon(iconName: IconName) {
  return iconMap[iconName];
}

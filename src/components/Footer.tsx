import { FULL_NAME, TITLE } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--nav-bg))] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/70 text-sm font-normal">© {new Date().getFullYear()} {FULL_NAME}. {TITLE}</p>
      </div>
    </footer>
  );
};

export default Footer;

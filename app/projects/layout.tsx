import "@/app/globals.css";
import Return from "@/app/return";
import Footer from "@/app/footer";

export default function ProjectLayout({  children,}: Readonly<{  children: React.ReactNode;}>) {
  return (
    <section>
        <Return />
        <main>{children}</main>
        <Footer />
      </section>
  );
}
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Mafer Marquina",
};

const banner = (
  <Banner storageKey="some-key">I will celebrate when I complete this! 🎉</Banner>
);
const navbar = (
  <Navbar
    logo={<b>🦐 Mafer Marquina</b>}
    logoLink={"/home"}
    projectLink="https://github.com/Goldenlion1997"
    chatLink="https://discord.gg/"
  />
);
const footer = (
  <Footer>MIT {new Date().getFullYear()} © My Cool Project.</Footer>
);

const search = <Search placeholder="Search docs.."></Search>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Goldenlion1997/technical-writer-challenge"
          footer={footer}
          search={search}
          editLink={null}
          feedback={{ content: null }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

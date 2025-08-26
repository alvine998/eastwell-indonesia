import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if(router.pathname?.includes("admin")) {
    return (
      <Component {...pageProps} />
    );
  }
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

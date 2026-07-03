
import Navigation from "./index/component/navigation";
import Index_image from "./index/component/index_image";
import Index_body from "./index/component/index_body";
import Footer from "./index/component/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-red-100">
      <Navigation />
      <Index_image/>
      <Index_body/>
      <Footer />
    </main>
  );
}

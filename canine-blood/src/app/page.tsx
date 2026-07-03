
import Navigation from "./component/index/navigation";
import Index_image from "./component/index/index_image";
import Index_body from "./component/index/index_body";
import Footer from "./component/index/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 via-white to-neutral-100">
      <Navigation />
      <Index_image/>
      <Index_body/>
      <Footer />
    </main>
  );
}

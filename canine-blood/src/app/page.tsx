
import Navigation from "./index/component/navigation";
import Index_image from "./index/component/index_image";
import Index_body from "./index/component/index_body";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Index_image/>
      <Index_body/>
    </main>
  );
}

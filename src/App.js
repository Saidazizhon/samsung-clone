import ShopAll from "./components/shopAll/ShopAll";
import Banner from "./components/banner/Banner";
import "./App.css";

function App() {
  let links1 = [
    "Galaxy Z Flip6",
    " Galaxy Z Fold6",
    " Galaxy Watch Ultra",
    "Galaxy Buds3 Pro",
    "Galaxy Experience",
  ];
  let links2 = [" Samsung Neo QLED 8k", "TV + Soundbar bundles", " Q990D"];
  let links3 = ["Bespoke Appliances", " Bespoke Refrigerators", "  Bespoke Laundry"];
  let links4 = ["Trade-in Recycling Program", " Certified Re-Newed", "How to recycle"];
  return (
    <div className="App container">
      <ShopAll />
      <Banner
        title="Mobile & Computing"
        links={links1}
        bg="https://images.samsung.com/is/image/samsung/assets/us/2407/homepage/Scom_HP_LOB-Mobile_Card-2_B6-pc.jpg?$1440_810_JPG$"
        name="Galaxy Z Flip6"
        desc="Get up to $650 instant-in credit⁰ and double the storage on us with select colors.✓"
        btn="Buy Now"
        btnColor="#000"
        btnTextColor="#fff"
      />
      <Banner
        title="TV & Audio"
        links={links2}
        bg="https://images.samsung.com/is/image/samsung/assets/us/home/07262024/W31_LoB1_D_1440x810-1x.jpg?$1440_810_JPG$"
        name="Discover new depths of detail"
        desc="Buy an 85'' Class Samsung Neo QLED QN800D and take in hyper-realistic picture with Neo Quantum HDR 8K+"
        btn="Buy Now"
        descColor="#fff"
        btnColor="#fff"
        btnTextColor="#000"
      />
      <Banner
        title="Home Appliances"
        links={links3}
        bg="https://images.samsung.com/is/image/samsung/assets/us/home/07102024-2/LOB1DT.jpg?$1440_810_JPG$"
        name="Save on Bespoke all summer"
        desc="Get up to $1,300 of select Bespoke models from America's #1 applianse brand.³"
        btn="Shop now"
        btnColor="#000"
        btnTextColor="#fff"
      />
      <Banner
        title="Sustainability"
        links={links4}
        bg="https://images.samsung.com/is/image/samsung/assets/us/home/07192024/SDSAC-7399-S95C-2-HP-LOB-FullBleed-DT-1440x810.jpg?$1440_810_JPG$"
        name="Trade-in and save up to $100"
        desc="We'll deliver your new TV and recycle your old TV for you."
        btn="Shop now"
        btnColor="#000"
        btnTextColor="#fff"
      />
    </div>
  );
}

export default App;

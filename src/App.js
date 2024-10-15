
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RND from "./pages/RND";
import Testing from "./pages/Testing";
import Production from "./pages/Production";
import PopupBoxes from './pages/PopupBoxes';
import Products from './pages/Products';
import Rewards from './pages/Rewards';
import Contact1 from './pages/Contact1';
import GPResin from './products/GPResin';
import GPPolyesterResin from './products/GPPolyesterResin';
import LMEKPeroxide from './products/LMEKPeroxide';
import MEKPCatalyst from './products/MEKPCatalyst';
import GPResinProduct from './products/GPResinProduct';
import CobaltOctoateProduct from './products/CobaltOctoateProduct';
import LiquidCobaltOctoate from './products/LiquidCobaltOctoate';
import FRPRawMaterial from './products/FRPRawMaterial';
import ThreePercentCobaltOctoate from './products/ThreePercentCobaltOctoate';
import CobaltOctoate from './products/CobaltOctoate';
import FiberglassCSMMat from './products/FiberglassCSMMat';
import ChoppedStrandMat from './products/ChoppedStrandMat';
import CSMMatEmulsionCutPiece from './products/CSMMatEmulsionCutPiece';
import FiberglassMart from './products/FiberglassMat';
import PolyesterResin from './products/PolyesterResin';
import PolyesterResin1 from './products/PolyesterResin1';
import VinylEsterResin from './products/VinylEsterResin';
import SaturatedPolyesterResin from './products/SaturatedPolyesterResin';
import MethylEthylKetonePeroxide from './products/MethylEthylKetonePeroxide';
import MEKPHardener from './products/MEKPHardener';
import LiquidMethylEthylKetone from './products/LiquidMethylEthylKetone';
import ISOResin from './products/ISOResin';
import IsophthalicResins from './products/IsophthalicResins';
import IsophthalicResin from './products/IsophthalicResin';
import HydrogenPeroxide from './products/HydrogenPeroxide';
import LiquidHydrogenPeroxide from './products/LiquidHydrogenPeroxide';
import FiftyPercentHydrogenPeroxide from './products/FiftyPercentHydrogenPeroxide';
import FRPResin from './products/FRPResin';
import MethylEthylKetone from './products/MethylEthylKetone';
import VinylEsterResin1 from './products/VinylEsterResin1';
import MonoEthyleneGlycol from './products/MonoEthyleneGlycol';
import RadiatorCoolant from './products/RadiatorCoolant';
import TalcumPowder from './products/TalcumPowder';
import HydrochloricAcid from './products/HydrochloricAcid';
import PlasticShoesRack from './products/PlasticShoesRack';
import WallMountedShoeRack from './products/WallMountedShoeRack';
import ShoesRack from './products/ShoeRack';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Navbar />
        
        {/* Content goes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact1 />} />
          <Route path="/rnd" element={<RND />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/production" element={<Production />} />
        <Route path="/products" element={<Products />} />
        <Route path="/rewards" element={<Rewards />} />



        <Route path="/gpresin" element={<GPResin />} />
        <Route path="/gppolyesterresin" element={<GPPolyesterResin />} />
        <Route path="/LMEKPeroxide" element={<LMEKPeroxide />} />
        <Route path="/MEKPCatalyst" element={<MEKPCatalyst />} />
        <Route path="/GPResinProduct" element={<GPResinProduct />} />
        
        <Route path="/cobalt-octoate" element={<CobaltOctoate />} />
        <Route path="/liquid-cobalt-octoate" element={<LiquidCobaltOctoate />} />
        <Route path="/cobalt-octoate-product" element={<CobaltOctoateProduct />} />
        <Route path="/three-percent-cobalt-octoate" element={<ThreePercentCobaltOctoate />} />
        <Route path="/FRP-raw-material" element={<FRPRawMaterial />} />
        
        <Route path="/fiberglassmart" element={<FiberglassMart />} />
        <Route path="/fiberglass-csm-mat" element={<FiberglassCSMMat />} />
        <Route path="/chopped-strand-mat" element={<ChoppedStrandMat />} />
        <Route path="/csm-mat-emulsion-cut-piece" element={<CSMMatEmulsionCutPiece />} />
        
        <Route path="/polyester-resin" element={<PolyesterResin />} />
        <Route path="/gp-polyester-resin" element={<PolyesterResin1 />} />
        <Route path="/vinyl-ester-resin" element={<VinylEsterResin />} />
        <Route path="/saturated-polyester-resin" element={<SaturatedPolyesterResin />} />
        
        <Route path="/methyl-ethyl-ketone-peroxide" element={<MethylEthylKetonePeroxide />} />
        <Route path="/mekp-hardener" element={<MEKPHardener />} />
        <Route path="/liquid-methyl-ethyl-ketone" element={<LiquidMethylEthylKetone />} />
       
        <Route path="/isophthalic-resins" element={<IsophthalicResins />} />
        <Route path="/iso-resin" element={<ISOResin />} />
        <Route path="/isophthalic-resin" element={<IsophthalicResin />} />
        
        <Route path="/hydrogen-peroxide" element={<HydrogenPeroxide />} />
        <Route path="/liquid-hydrogen-peroxide" element={<LiquidHydrogenPeroxide />} />
        <Route path="/fifty-percent-hydrogen-peroxide" element={<FiftyPercentHydrogenPeroxide />} />
        
        <Route path="/frp-resin" element={<FRPResin />} />
       
        <Route path="/methyl-ethyl-ketone" element={<MethylEthylKetone />} />

        <Route path="/vinyl-ester-resin1" element={<VinylEsterResin1 />} />
        
        <Route path="/mono-ethylene-glycol" element={<MonoEthyleneGlycol />} />
       
        <Route path="/radiator-coolant" element={<RadiatorCoolant />} />

        <Route path="/talcum-powder" element={<TalcumPowder />} />
        
        <Route path="/hydrochloric-acid" element={<HydrochloricAcid />} />

        <Route path="/shoe-rack" element={<ShoesRack />} />
        <Route path="/plastic-shoes-rack" element={<PlasticShoesRack />} />
        <Route path="/wall-mounted-shoe-rack" element={<WallMountedShoeRack />} />


        </Routes>
        
        
        {/* <PopupBoxes /> */}
        {/* Footer should be inside the main container */}
        <Footer />
      </div>
      
    </Router>
  );
};

export default App;

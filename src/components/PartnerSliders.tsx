import { Building2, Landmark, Shield, Car, Home as HomeIcon, Heart } from "lucide-react";

import axis from '../assets/amc/axis.png'
import bajaj from '../assets/amc/bajaj.png'
import bandhan from '../assets/amc/bandhan.avif'
import baroda from '../assets/amc/baroda.jpg'
import birla from '../assets/amc/birla.jpg'
import boi from '../assets/amc/boi.png'
import canara from '../assets/amc/canara.webp'
import dsp from '../assets/amc/dsp.jpg'
import edel from '../assets/amc/edel.jpg'
import franklin from '../assets/amc/franklin.webp'
import groww from '../assets/amc/groww.webp'
import hdfc from '../assets/amc/hdfc.png'
import helios from '../assets/amc/helios.jpg'
import hsbc from '../assets/amc/hsbc.jpg'
import icici from '../assets/amc/icici.webp'
import iifl from '../assets/amc/iifl.avif'
import invesco from '../assets/amc/invesco.avif'
import iti from '../assets/amc/iti.png'
import jimfin from '../assets/amc/jm-fin.jpg'
import kotak from '../assets/amc/kotak.png'
import lic from '../assets/amc/lic.png'
import mahindra from '../assets/amc/mahindra.png'
import mirae from '../assets/amc/mirae-asset.png'
import motilal from '../assets/amc/motilal.png'
// import navi from '../assets/amc/navi-mf.png'
import nippon from '../assets/amc/nippon.gif'
// import nj from '../assets/amc/nj.jpg'
import parag from '../assets/amc/parag.jpg'
import pgim from '../assets/amc/pgim.png'
import quant from '../assets/amc/quant.png'
import quantum from '../assets/amc/quantum.webp'
import samco from '../assets/amc/samco.png'
import sbi from '../assets/amc/sbi.webp'
import shriram from '../assets/amc/shriram.png'
import sundaram from '../assets/amc/sundaram.png'
import tata from '../assets/amc/tata.avif'
import tauras from '../assets/amc/tauras.jpeg'
import trust from '../assets/amc/trust.png'
import unifi from '../assets/amc/unifi.webp'
import union from '../assets/amc/union.jpg'
import uti from '../assets/amc/uti.jpg'
import whiteoak from '../assets/amc/whiteoak.png'


const amcPartners = [
  { name: "Axis Mutual Fund", logo: axis },
  { name: "Bajaj Finserv", logo: bajaj },
  { name: "Bandhan Mutual Fund", logo: bandhan },
  { name: "Baroda BNP PARIBAS Mutual Fund", logo: baroda },
  { name: "Aditya Birla Mutual Fund", logo: birla },
  { name: "Bank of India Mutual Fund", logo: boi },
  { name: "Canara Robecco", logo: canara },
  { name: "DSP Asset Managers", logo: dsp },
  { name: "Edelweiss Mutual Fund", logo: edel },
  { name: "Franklin Templeton Mutual Fund", logo: franklin },
  { name: "Groww Mutual Fund", logo: groww },
  { name: "HDFC Mutual Fund", logo: hdfc },
  { name: "Helios Asset Management ", logo: helios },
  { name: "HSBC Asset Management", logo: hsbc },
  { name: "ICICI Prudential Mutual Fund", logo: icici },
  { name: "IIFL", logo: iifl },
  { name: "Invesco Mutual Fund", logo: invesco },
  { name: "ITI Mutual Fund", logo: iti },
  { name: "JM Financial", logo: jimfin },
  { name: "Kotak Mahindra Mutual Fund", logo: kotak },
  { name: "LIC Mutual Fund", logo: lic },
  { name: "Mahindra Manulife Mutual Fund", logo: mahindra },
  { name: "Mirae Asset Mutual Fund", logo: mirae },
  { name: "Motilal Oswal Mutual Fund", logo: motilal },
  { name: "Nippon India Mutual Fund", logo: nippon },
  { name: "PPFAS Mutual Fund", logo: parag },
  { name: "PGIM India Mutual Fund", logo: pgim },
  { name: "Quant Money Managers", logo: quant },
  { name: "Quantum Mutual Fund", logo: quantum },
  { name: "Samco Asset Management", logo: samco },
  { name: "SBI Mutual Fund", logo: sbi },
  { name: "Shriram Mutual Fund", logo: shriram },
  { name: "Tata Asset Management", logo: tata },
  { name: "Taurus Mutual Fund", logo: tauras },
  { name: "Trust Mutual Fund", logo: trust },
  { name: "Unifi Mutual Fund", logo: unifi },
  { name: "UTI Mutual Fund", logo: uti },
  { name: "WhiteOak Capital Mutual Fund", logo: whiteoak },
];

// const bankPartners = [
//   { name: "State Bank of India", logo: "SBI" },
//   { name: "HDFC Bank", logo: "HDFC" },
//   { name: "ICICI Bank", logo: "ICICI" },
//   { name: "Axis Bank", logo: "AXIS" },
//   { name: "Punjab National Bank", logo: "PNB" },
//   { name: "Bank of Baroda", logo: "BOB" },
//   { name: "Canara Bank", logo: "CANARA" },
//   { name: "Union Bank", logo: "UNION" },
//   { name: "IDFC First Bank", logo: "IDFC" },
//   { name: "Yes Bank", logo: "YES" },
//   { name: "IndusInd Bank", logo: "IIB" },
//   { name: "Federal Bank", logo: "FED" }
// ];

const insuranceTypes = [
  { name: "Motor Insurance", icon: Car, description: "Comprehensive vehicle protection" },
  { name: "Two Wheeler Insurance", icon: Car, description: "Bike and scooter coverage" },
  { name: "Health Insurance", icon: Heart, description: "Medical and health coverage" },
  { name: "Life Insurance", icon: Shield, description: "Life protection plans" },
  { name: "Home Insurance", icon: HomeIcon, description: "Property protection" },
  { name: "Travel Insurance", icon: Shield, description: "Travel and trip coverage" }
];

const LogoCard = ({ item, showIcon = false }) => (
  <div className="flex-none w-48">
    <div className="card-finance text-center p-6 h-32 flex flex-col justify-center hover-scale bg-transparent border-0">
      {showIcon ? (
        <div className="mx-auto mb-2">
          <item.icon className="w-8 h-8 text-primary" />
        </div>
      ) : (
        <div className="w-20 h-22 rounded-lg flex items-center justify-center mx-auto mb-2">
          <img src={item.logo} className="font-bold text-sm"></img>
        </div>
      )}
      {/* <h4 className="font-semibold text-sm text-foreground">{item.name}</h4> */}
      {item.description && (
        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
      )}
    </div>
  </div>
);

const PartnerSliders = () => {
  return (
    <section className="py-8 bg-muted">
      <div className="container mx-auto px-4">
        {/* AMC Partners */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our AMC Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted mutual fund partners for your investment journey
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex scroll-animation">
              {[...amcPartners, ...amcPartners].map((amc, index) => (
                <LogoCard key={index} item={amc} />
              ))}
            </div>
          </div>
        </div>

        {/* Banking & Insurance Partners */}
        {/* <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Banking & Insurance Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Leading financial institutions and comprehensive insurance solutions for all your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            Banking Partners
            <div>
              <div className="relative overflow-hidden">
                <div className="flex scroll-animation" style={{ animationDirection: 'reverse' }}>
                  {[...bankPartners, ...bankPartners].map((bank, index) => (
                    <LogoCard key={index} item={bank} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PartnerSliders;